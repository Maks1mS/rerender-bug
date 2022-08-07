import React from 'react';
import atomize from "@quarkly/atomize";
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
const overrides = {
	'Box': {
		kind: 'Box',
		props: {}
	}
};

const Component = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	console.log('Render!');
	return <div {...props}>
		    Say hello Component
    
		<Box {...override('Box')} />
		  
	</div>;
};

export default atomize(Component)({
	name: "Component",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Component — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});