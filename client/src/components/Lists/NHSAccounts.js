/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import matchSorter from 'match-sorter';
import ReactTable from '../Styled/Table';
import { nhsAccountListType } from '../types';

/* istanbul ignore next */
const NHSAccounts = ({ nhsAccountList }) => {
	// console.log("FINAL VIEW: ", accountList);

	const columnHeaders = [
		{
			Header: 'Account ID',
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
			Header: 'Account name',
			accessor: 'name',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['name'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'Account type',
			accessor: 'type',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['type'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'Expired date',
			accessor: 'expire_date',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['expire_date'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		}
	];

	console.log('DEBUG: NHS Accounts ', { nhsAccountList });

	return (
		<div>
			<ReactTable
				data={nhsAccountList}
				columns={columnHeaders}
				defaultPageSize={5}
				filterable
				minRows={0}
				showPagination={
					nhsAccountList != undefined ? nhsAccountList.length >= 5 : false
				}
			/>
		</div>
	);
};

NHSAccounts.propTypes = {
	accountList: nhsAccountListType.isRequired
};

export default NHSAccounts;
