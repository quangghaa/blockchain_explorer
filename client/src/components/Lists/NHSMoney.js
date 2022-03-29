/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import matchSorter from 'match-sorter';
import ReactTable from '../Styled/Table';
import { nhsMoneyListType } from '../types';

/* istanbul ignore next */
const NHSMoney = ({ nhsMoneyList }) => {
	const columnHeaders = [
		{
			Header: 'ID',
			accessor: 'id',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['id'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'Account type',
			accessor: 'account_type',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['account_type'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'Total money',
			accessor: 'total_money',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['total_money'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		}
	];

	return (
		<div>
			<ReactTable
				data={nhsMoneyList}
				columns={columnHeaders}
				defaultPageSize={5}
				filterable
				minRows={0}
				showPagination={
					nhsMoneyList != undefined ? nhsMoneyList.length >= 5 : false
				}
			/>
		</div>
	);
};

NHSMoney.propTypes = {
	moneyList: nhsMoneyListType.isRequired
};

export default NHSMoney;
