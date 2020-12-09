import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<style>
::-webkit-input-placeholder {color:#637897;font-size: 22px;}
::-moz-placeholder          {color:#637897;font-size: 22px;}
:-moz-placeholder           {color:#637897;font-size: 22px;}
:-ms-input-placeholder      {color:#637897;font-size: 22px;}

 @media (max-width: 499px) {
	 ::-webkit-input-placeholder {color:#637897;font-size: 20px;}
::-moz-placeholder          {color:#637897;font-size: 20px;}
:-moz-placeholder           {color:#637897;font-size: 20px;}
:-ms-input-placeholder      {color:#637897;font-size: 20px;}
}
	 
span.reqiredInPlaceholder.note {
    color: #FF0000;
    font-size: 24px !important;
    position: absolute;
    right: 10px;
    top: 90px;
}	 
</style>



`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});