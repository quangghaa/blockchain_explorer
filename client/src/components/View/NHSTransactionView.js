/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import { nhsTransactionListType } from '../types';
import NHSTransaction from '../Lists/NHSTransactions';

export const NHSTransactionView = ({ nhsTransactionList }) => (
	<View>
		<NHSTransaction nhsTransactionList={nhsTransactionList} />
	</View>
);

NHSTransactionView.propTypes = {
	nhsTransactionList: nhsTransactionListType.isRequired
};

export default NHSTransactionView;
