/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import NHSAccounts from '../Lists/NHSAccounts.js';
import { nhsAccountListType, peerListType } from '../types';

//  export const NHSAccountView = ({ nhsAccountList }) => (
//    <View>
//      <NHSAccounts nhsAccountList={nhsAccountList} />
//    </View>
//  );

export const NHSAccountView = ({ nhsAccountList }) => {
	console.log('IN ACCOUT VIEW: ', { nhsAccountList });
	return (
		<View>
			<NHSAccounts nhsAccountList={nhsAccountList} />
		</View>
	);
};

NHSAccountView.propTypes = {
	nhsAccountList: nhsAccountListType.isRequired
};

export default NHSAccountView;
