import React from "react";
import { useOverrides, StackItem, Override, Menu, SocialMedia, Stack, Section } from "@quarkly/components";
import { Image, Text, Icon, Link } from "@quarkly/widgets";
import { FiArrowUpRight } from "react-icons/fi";
const defaultProps = {
	"background-color": "#191E22",
	"position": "relative",
	"text-align": "left",
	"padding": "48px 0",
	"background": "--color-darkL2"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"gap": "24px"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "154px",
			"loading": "lazy",
			"height": "100%",
			"margin-bottom": "8px",
			"sm-padding-right": "8px",
			"margin": "0px 0px 0px 0px",
			"src": "https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-beta-logo-on-dark.svg?v=2020-10-30T09:51:10.304Z"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"sm-flex-direction": "column",
			"sm-align-items": "flex-start",
			"sm-padding": "6px 6px 6px 0px",
			"justify-content": "space-between",
			"width": "auto",
			"depth": "1",
			"margin": "0px 0px 0px -14px",
			"md-width": "100%",
			"md-flex-wrap": "wrap"
		},
		"overrides": {
			"link": {
				"props": {
					"color": "inherit",
					"text-decoration-line": "initial",
					"hover-color": "--secondary",
					"children": null,
					"sm-margin": "0px 0px 0px 0px",
					"font": "inherit",
					"width": "auto",
					"padding": "7px 12px 6px 12px",
					"display": "flex",
					"font": "--captureSm",
					"font-weight": "400",
					"text-transform": "uppercase",
					"letter-spacing": "2px",
					"color": "--light"
				},
				"overrides": {}
			},
			"link-active": {
				"props": {
					"hover-cursor": "default",
					"color": "inherit",
					"font-weight": "800",
					"color": "--secondary",
					"children": null
				},
				"overrides": {}
			},
			"item-active": {
				"props": {
					"color": "--lightD2",
					"children": null
				},
				"overrides": {}
			},
			"item-index": {
				"props": {
					"display": "none"
				}
			},
			"item": {
				"props": {
					"padding": "0px 0px 4px 0px",
					"color": "--lightD2",
					"children": null,
					"sm-margin": "4px 4px 4px 4px",
					"display": "flex",
					"flex-direction": "column",
					"width": "100%",
					"margin": "0px 0px 0px 0px"
				},
				"overrides": {}
			},
			"item-contest-ru": {
				"props": {
					"display": "none"
				}
			},
			"sub": {
				"props": {
					"display": "flex",
					"flex-direction": "column",
					"margin": "4px 0px 0px -6px"
				}
			},
			"link-contest": {
				"props": {
					"children": "Contest"
				}
			},
			"link-user-agreement": {
				"props": {
					"children": "Agreement"
				}
			},
			"link-roadmap": {
				"props": {
					"children": "Roadmap"
				}
			},
			"link-features": {
				"props": {
					"children": "Features"
				}
			},
			"link-docs": {
				"props": {
					"children": "Docs"
				}
			},
			"link-features-for-designers": {
				"props": {
					"children": "for Designers"
				}
			},
			"link-features-for-developers": {
				"props": {
					"children": "for Developers"
				}
			},
			"link-interface": {
				"props": {
					"children": "Interface"
				}
			},
			"link-theme": {
				"props": {
					"children": "Theme"
				}
			},
			"link-props-panel": {
				"props": {
					"children": "Properties"
				}
			},
			"link-tree-layers": {
				"props": {
					"children": "Page and Layers"
				}
			},
			"link-code-editor": {
				"props": {
					"children": "Code Editor"
				}
			},
			"link-components": {
				"props": {
					"children": "Components"
				}
			},
			"link-quarkly-ui": {
				"props": {
					"children": "Quarkly UI"
				}
			},
			"link-shortcuts": {
				"props": {
					"children": "Shortcuts"
				}
			},
			"item-contest-ru-terms": {
				"props": {
					"display": "none"
				}
			},
			"item-contest-terms": {
				"props": {
					"display": "none"
				}
			},
			"item-404": {
				"props": {
					"display": "none"
				}
			}
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"sm-width": "100%",
			"sm-order": "1"
		},
		"overrides": {
			"StackItemContent": {
				"props": {
					"align-items": "flex-end",
					"justify-content": "flex-end"
				}
			}
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "--grey",
			"lg-font": "--captureSm",
			"text-align": "left",
			"sm-text-align": "left",
			"sm-order": "1",
			"md-order": "1",
			"lg-order": "1",
			"align-self": "center",
			"children": "© All Rights Reserved",
			"font": "--captureSm",
			"margin": "0 0 0 0px",
			"sm-margin": "0 0 0 2px",
			"sm-width": "100%"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "66.66%",
			"sm-width": "100%"
		},
		"overrides": {
			"StackItemContent": {
				"props": {
					"align-items": "center",
					"display": "flex",
					"justify-content": "flex-end"
				}
			}
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://spectrum.chat/quarkly",
			"color": "--light",
			"text-decoration-line": "initial",
			"transition": "color 0.1s ease-in-out",
			"display": "flex",
			"hover-color": "--secondary",
			"target": "_blank",
			"sm-padding": "8px 8px 8px 8px",
			"sm-text-align": "left",
			"font": "--captureSm",
			"padding": "8px 8px 8px 8px",
			"margin": "0px 8px 0px auto",
			"sm-margin": "0px 12px 0px -6px"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fi",
			"icon": FiArrowUpRight,
			"display": "inline-block",
			"margin": "0px 0px 0px 4px",
			"size": "18px"
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://facebook.com/quarklyapp",
			"twitter": "https://twitter.com/quarklyapp",
			"icon-size": "18px",
			"md-margin": "0px 0px 0px 0px",
			"md-justify-content": "flex-start",
			"sm-justify-content": "flex-start",
			"youtube": "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
			"sm-margin": "0px 0px 0px 0px",
			"lg-margin": "0px 0px 0px -8px",
			"github": "https://github.com/quarkly",
			"sm-flex": "0 1 auto",
			"margin": "0px 0px 0px 0px"
		},
		"overrides": {
			"link": {
				"props": {
					"border-radius": "24px",
					"padding": "8px",
					"background": "rgba(237, 242, 246, 0)",
					"transition": "background --transitionDuration-fastest --transitionTimingFunction-easeOut 0s",
					"children": null,
					"hover-background": "#FD0A1B"
				},
				"overrides": {}
			},
			"icon": {
				"props": {
					"color": "--lightD2",
					"children": null
				},
				"overrides": {}
			},
			"link-facebook": {
				"props": {
					"hover-background": "#4469B0",
					"children": null
				},
				"overrides": {}
			},
			"link-github": {
				"props": {
					"hover-background": "--color-dark",
					"children": null
				},
				"overrides": {}
			},
			"link-twitter": {
				"props": {
					"hover-background": "#2AA3EF",
					"children": null
				},
				"overrides": {}
			}
		}
	}
};

const FooterHigh = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Image {...override("image")} />
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Menu {...override("menu")} />
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Text {...override("text")} />
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Link {...override("link")}>
					Spectrum
					<Icon {...override("icon")} />
				</Link>
				<SocialMedia {...override("socialMedia")} />
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(FooterHigh, { ...Section,
	defaultProps,
	overrides
});
export default FooterHigh;