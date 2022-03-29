/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import matchSorter from 'match-sorter';
import ReactTable from '../Styled/Table';
import { nhsTransactionListType } from '../types';

/* istanbul ignore next */
const NHSTransaction = ({ nhsTransactionList }) => {
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
			Header: 'From',
			accessor: 'from',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['from'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'To',
			accessor: 'to',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['to'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'data',
			accessor: 'data',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['data'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		},
		{
			Header: 'Date',
			accessor: 'date',
			filterMethod: (filter, rows) =>
				matchSorter(
					rows,
					filter.value,
					{ keys: ['date'] },
					{ threshold: matchSorter.rankings.SIMPLEMATCH }
				),
			filterAll: true
		}
	];

	return (
		<div>
			<ReactTable
				data={nhsTransactionList}
				columns={columnHeaders}
				defaultPageSize={5}
				filterable
				minRows={0}
				showPagination={
					nhsTransactionList != undefined ? nhsTransactionList.length >= 5 : false
				}
			/>
		</div>
	);
};

NHSTransaction.propTypes = {
	nhsTransactionList: nhsTransactionListType.isRequired
};

export default NHSTransaction;
