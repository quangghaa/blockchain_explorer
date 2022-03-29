/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import { nhsMoneyListType, peerListType } from '../types';
import NHSMoney from '../Lists/NHSMoney';

export const NHSMoneyView = ({ nhsMoneyList }) => (
	<View>
		<NHSMoney nhsMoneyList={nhsMoneyList} />
	</View>
);

NHSMoneyView.propTypes = {
	nhsMoneyList: nhsMoneyListType.isRequired
};

export default NHSMoneyView;
