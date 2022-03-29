/**
 *    SPDX-License-Identifier: Apache-2.0
 */

//import React from 'react';
import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import BlocksView from './View/BlocksView';
import NetworkView from './View/NetworkView';
import TransactionsView from './View/TransactionsView';
import ChaincodeView from './View/ChaincodeView';
import DashboardView from './View/DashboardView';
import ChannelsView from './View/ChannelsView';
import { chartSelectors } from '../state/redux/charts';
import { tableOperations, tableSelectors } from '../state/redux/tables';
import {
	blockListType,
	chaincodeListType,
	channelsType,
	currentChannelType,
	dashStatsType,
	getTransactionType,
	peerListType,
	peerStatusType,
	transactionType,
	transactionByOrgType,
	transactionListType
} from './types';
import PageNotFound from './View/PageNotFound';

import Private from './Route';
import NHSAccountView from './View/NHSAccountView';
import NHSMoneyView from './View/NHSMoneyView';
import NHSTransactionView from './View/NHSTransactionView';

const {
	currentChannelSelector,
	blockActivitySelector,
	channelListSelector,
	dashStatsSelector,
	peerStatusSelector,
	transactionByOrgSelector
} = chartSelectors;

const {
	blockListSelector,
	chaincodeListSelector,
	channelsSelector,
	peerListSelector,
	transactionSelector,
	transactionListSelector,
	blockListSearchSelector,
	transactionListSearchSelector
} = tableSelectors;

const styles = theme => {
	const { type } = theme.palette;
	const dark = type === 'dark';
	return {
		main: {
			color: dark ? '#ffffff' : undefined
		}
	};
};

export const Main = props => {
	const {
		classes,
		blockList,
		blockActivity,
		chaincodeList,
		channels,
		currentChannel,
		dashStats,
		getTransaction,
		peerList,
		peerStatus,
		transaction,
		transactionByOrg,
		transactionList,
		blockListSearch,
		transactionListSearch,
		getBlockListSearch,
		getTransactionListSearch,
		nhsAccountList,
		nhsMoneyList,
		nhsTransactionList
	} = props;

	const blocksViewProps = {
		blockList,
		blockListSearch,
		getBlockListSearch,
		transactionByOrg,
		currentChannel,
		getTransaction,
		transaction
	};
	const chaincodeViewProps = {
		chaincodeList
	};

	const channelsViewProps = {
		channels
	};

	const dashboardViewProps = {
		blockList,
		dashStats,
		peerStatus,
		transactionByOrg,
		blockActivity
	};

	const networkViewProps = {
		peerList
	};

	const nhsAccountViewProps = {
		nhsAccountList
	};

	const nhsMoneyViewProps = {
		nhsMoneyList
	};

	const nhsTransactionViewProps = {
		nhsTransactionList
	};

	const transactionsViewProps = {
		currentChannel,
		transaction,
		transactionList,
		getTransaction,
		transactionByOrg,
		transactionListSearch,
		getTransactionListSearch
	};

	const [transactionId, setTransactionId] = useState('');

	useEffect(() => {
		let windowUrl = window.location.search;
		let queryParams = new URLSearchParams(windowUrl);
		if (queryParams.get('tab')) {
			setTransactionId(queryParams.get('transId'));
			const { history } = props;
			let routePath = '/' + queryParams.get('tab');
			history.replace(routePath);
		}
	}, []);

	function removeTransactionId() {
		let windowUrl = window.location.search;
		let queryParams = new URLSearchParams(windowUrl);
		if (queryParams.get('tab')) {
			queryParams.delete('tab');
			queryParams.delete('transId');
		}
		setTransactionId('');
	}

	return (
		<Router>
			<div className={classes.main}>
				<Switch>
					<Private
						exact
						path="/"
						render={routeprops => (
							<DashboardView {...{ ...dashboardViewProps, ...routeprops }} />
						)}
					/>
					<Private
						exact
						path="/blocks"
						render={routeprops => (
							<BlocksView {...{ ...blocksViewProps, ...routeprops }} />
						)}
					/>
					<Private
						exact
						path="/chaincodes"
						render={routeprops => (
							<ChaincodeView {...{ ...chaincodeViewProps, ...routeprops }} />
						)}
					/>
					<Private
						exact
						path="/channels"
						render={routeprops => (
							<ChannelsView {...{ ...channelsViewProps, ...routeprops }} />
						)}
					/>
					<Private
						exact
						path="/network"
						render={routeprops => (
							<NetworkView {...{ ...networkViewProps, ...routeprops }} />
						)}
					/>
					<Private
						exact
						path="/transactions"
						render={routeprops => (
							<TransactionsView
								{...{ ...transactionsViewProps, ...routeprops }}
								transactionId={transactionId}
								removeTransactionId={removeTransactionId}
							/>
						)}
					/>
					<Private
						exact
						path="/nhs_account"
						render={routeprops => (
							<NHSAccountView {...{ ...nhsAccountViewProps, ...routeprops }} />
						)}
					/>
					<Private
						exact
						path="/nhs_money"
						render={routeprops => (
							<NHSMoneyView {...{ ...nhsMoneyViewProps, ...routeprops }} />
						)}
					/>
					<Private
						exact
						path="/nhs_transaction"
						render={routeprops => (
							<NHSTransactionView {...{ ...nhsTransactionViewProps, ...routeprops }} />
						)}
					/>
					<Route exact render={routeprops => <PageNotFound {...routeprops} />} />
				</Switch>
			</div>
		</Router>
	);
};

Main.propTypes = {
	blockList: blockListType.isRequired,
	chaincodeList: chaincodeListType.isRequired,
	channels: channelsType.isRequired,
	currentChannel: currentChannelType.isRequired,
	dashStats: dashStatsType.isRequired,
	getTransaction: getTransactionType.isRequired,
	peerList: peerListType.isRequired,
	peerStatus: peerStatusType.isRequired,
	transaction: transactionType.isRequired,
	transactionByOrg: transactionByOrgType.isRequired,
	transactionList: transactionListType.isRequired
};

const fakeAccounts = [
	{
		id: '1',
		name: 'Account 1',
		type: 'User',
		expire_date: '22/02/2022'
	},
	{
		id: '2',
		name: 'Account 2',
		type: 'User',
		expire_date: '22/02/2023'
	},
	{
		id: '2',
		name: 'Account 2',
		type: 'User',
		expire_date: '22/02/2024'
	}
];

const fakeMoney = [
	{
		id: '1',
		account_type: 'User',
		total_money: 999999
	},
	{
		id: '2',
		account_type: 'VIP',
		total_money: 88888888
	},
	{
		id: '3',
		account_type: 'PRO',
		total_money: 9999998888
	}
];

const fakeTransactions = [
	{
		id: '1',
		from: 'Address x',
		to: 'Address y',
		data: 'Some data here',
		date: '29/03/2022'
	},
	{
		id: '2',
		from: 'Address a',
		to: 'Address y',
		data: 'Some data here',
		date: '29/03/2022'
	},
	{
		id: '3',
		from: 'Address b',
		to: 'Address y',
		data: 'Some data here',
		date: '29/03/2022'
	}
];

const connectedComponent = connect(
	state => ({
		blockList: blockListSelector(state),
		chaincodeList: chaincodeListSelector(state),
		channelList: channelListSelector(state),
		channels: channelsSelector(state),
		currentChannel: currentChannelSelector(state),
		dashStats: dashStatsSelector(state),
		peerList: peerListSelector(state),
		peerStatus: peerStatusSelector(state),
		transaction: transactionSelector(state),
		transactionByOrg: transactionByOrgSelector(state),
		transactionList: transactionListSelector(state),
		blockListSearch: blockListSearchSelector(state),
		transactionListSearch: transactionListSearchSelector(state),
		blockActivity: blockActivitySelector(state),
		nhsAccountList: fakeAccounts,
		nhsMoneyList: fakeMoney,
		nhsTransactionList: fakeTransactions
	}),
	{
		getTransaction: tableOperations.transaction,
		getBlockListSearch: tableOperations.blockListSearch,
		getTransactionListSearch: tableOperations.transactionListSearch
	}
)(Main);
export default withStyles(styles)(connectedComponent);
