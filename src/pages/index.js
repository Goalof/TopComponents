import React from "react";
import theme from "theme";
import { Theme, Link, Image, Icon, Text, Box, List, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.EmbedHTML />
		<Section
			background="--color-darkL2"
			border-width="0px 0px 2px 0px"
			border-style="solid"
			border-color="#0E1317"
			filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
		>
			<Stack>
				{"    "}
				<StackItem width="25%" display="flex" lg-width="40%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Image src="https://uploads.quarkly.io/landing/logo-on-dark.svg" width="154px" height="auto" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="75%" display="flex" lg-width="60%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					{"        "}
					<Link
						href="/features/"
						text-decoration-line="initial"
						color="--white"
						font="--menu"
						text-transform="uppercase"
						margin="0px 9px 0px 9px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
						lg-display="none"
					>
						FEATURES
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--biruza"
						font="700 14px/17px --fontFamily-googleSourceSansPro"
						text-transform="uppercase"
						margin="0px 9px 0px 9px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
						lg-display="none"
					>
						Marketplace
					</Link>
					<Link
						href="/docs"
						text-decoration-line="initial"
						color="--white"
						font="--menu"
						text-transform="uppercase"
						margin="0px 9px 0px 9px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
						lg-display="none"
					>
						DOCS
					</Link>
					<Link
						href="/roadmap"
						text-decoration-line="initial"
						color="--white"
						font="--menu"
						text-transform="uppercase"
						margin="0px 9px 0px 9px"
						padding="6px 9px 6px 9px"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						letter-spacing="0.07em"
						lg-display="none"
					>
						ROADMAP
					</Link>
					<Link
						href="/dashboard"
						text-decoration-line="initial"
						color="--white"
						font="--menu"
						text-transform="uppercase"
						margin="0px 10px 0px 22px"
						padding="6px 21px 6px 21px"
						letter-spacing="0.07em"
						border-width="2px"
						border-color="#66FFE4"
						border-radius="50px"
						border-style="solid"
						sm-display="none"
					>
						LOG IN
					</Link>
					<Link
						href="/dashboard"
						text-decoration-line="initial"
						color="--dark"
						font="--menu"
						text-transform="uppercase"
						margin="0px 0px 0px 10px"
						padding="6px 21px 6px 21px"
						letter-spacing="0.07em"
						border-width="2px"
						border-style="solid"
						border-color="--color-biruza"
						border-radius="50px"
						background="--color-biruza"
						lg-margin="0px 10px 0px 10px"
						sm-padding="6px 17px 6px 17px"
					>
						SIGN UP
					</Link>
					<Icon
						category="md"
						icon={MdMenu}
						size="32px"
						color="--white"
						display="none"
						lg-display="block"
						lg-padding="4px 4px 4px 4px"
						lg-border-width="2px"
						lg-border-style="solid"
						lg-border-color="--color-biruza"
						lg-border-radius="50px"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			text-align="left"
			padding="70px 0 80px 0"
			background-image="linear-gradient(0deg, #0E1317 0%, #22262E 100%)"
			lg-text-align="left"
			position="relative"
			overflow="hidden"
			sm-padding="50px 0 70px 0"
			sm-text-align="center"
			quarkly-title="Hero"
			lg-padding="60px 0 80px 0"
			md-padding="40px 0 60px 0"
			background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgb(14, 19, 23) 0%,rgb(14, 19, 23) 4.8%) 0% 0% /auto repeat scroll padding-box"
		>
			<Override slot="SectionContent" text-align="center" color="--light" max-width="1300px" />
			<Stack gap="0px" margin="0px 0px 0px 0px" width="100%">
				{"        "}
				<StackItem width="100%" display="flex" md-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
					{"        "}
					<Text
						font="normal 600 80px/85px --fontFamily-googleSourceSansPro"
						margin="0px 0px 14px 0px"
						display="inline-block"
						color="--light"
						text-align="center"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						sm-font="normal 600 40px/40px --fontFamily-googleSourceSansPro"
						md-font="normal 600 60px/70px --fontFamily-googleSourceSansPro"
					>
						We are looking for Quarkly team
					</Text>
					<Text
						font="normal 600 80px/102px --fontFamily-googleSourceSansPro"
						margin="0px 0px 65px 0px"
						display="inline-block"
						color="--secondary"
						text-align="center"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						sm-font="normal 600 40px/40px --fontFamily-googleSourceSansPro"
						md-font="normal 600 50px/40px --fontFamily-googleSourceSansPro"
						md-margin="0px 0px 0px 0px"
					>
						IT Propagandist
					</Text>
					<Stack margin="0px 0px 0px 0px" gap="0px">
						<StackItem
							width="50%"
							display="flex"
							flex-direction="column"
							padding="16px 0px 16px 16px"
							lg-width="100%"
							z-index="9"
						>
							<Override
								slot="StackItemContent"
								flex-direction="column"
								background="#22262E"
								padding="36px 54px 62px 54px"
								align-items="flex-start"
								border-width="0px 1px 0px 0px"
								border-color="#0E121A"
								border-style="solid"
								border-radius="12px 0px 0px 12px"
								lg-border-radius="12px 12px 0px 0px"
								md-padding="36px 34px 62px 34px"
								sm-padding="36px 20px 36px 10px"
								sm-border-width="0px 0px 1px 0px"
							/>
							<Box
								width="100%"
								display="flex"
								align-items="center"
								margin="0px 0px 30px 0px"
								sm-justify-content="center"
							>
								<Text margin="0px 0px 0px 12px" font="normal 600 36px/42px --fontFamily-googleSourceSansPro" color="--light" sm-font="normal 500 26px/30px --fontFamily-sans">
									We expect you to:
								</Text>
							</Box>
							<List font="30px sans-serif" color="--biruza" margin="0px 0px 24px 0px">
								<Text
									color="--light"
									font="400 24px/30px --fontFamily-googleSourceSansPro"
									margin="0px 0px 0px 0px"
									text-align="left"
									md-font="400 20px/25px --fontFamily-googleSourceSansPro"
									sm-font="400 18px/24px --fontFamily-googleSourceSansPro"
								>
									Love Quarkly as much as we do
								</Text>
							</List>
							<List font="30px sans-serif" color="--biruza" margin="0px 0px 0px 0px">
								<Text
									color="--light"
									font="400 24px/30px --fontFamily-googleSourceSansPro"
									margin="0px 0px 24px 0px"
									text-align="left"
									md-font="400 20px/25px --fontFamily-googleSourceSansPro"
									sm-font="400 18px/24px --fontFamily-googleSourceSansPro"
								>
									Build relationships with professional community and opinion makers{" "}
								</Text>
							</List>
							<List font="30px sans-serif" color="--biruza" margin="0px 0px 0px 0px">
								<Text
									color="--light"
									font="400 24px/30px --fontFamily-googleSourceSansPro"
									margin="0px 0px 0px 0px"
									text-align="left"
									md-font="400 20px/25px --fontFamily-googleSourceSansPro"
									sm-font="400 18px/24px --fontFamily-googleSourceSansPro"
								>
									Lead our developer relations
								</Text>
							</List>
							<Box
								width="100%"
								display="flex"
								align-items="center"
								margin="60px 0px 30px 0px"
								sm-margin="30px 0px 30px 0px"
								sm-justify-content="center"
							>
								<Text margin="0px 0px 0px 12px" font="normal 600 36px/42px --fontFamily-sans" color="--light" sm-font="normal 500 26px/30px --fontFamily-sans">
									Work with us:
								</Text>
							</Box>
							<List font="30px sans-serif" color="--biruza" margin="0px 0px 0px 0px">
								<Text
									color="--light"
									font="400 24px/30px --fontFamily-googleSourceSansPro"
									margin="0px 0px 24px 0px"
									text-align="left"
									md-font="400 20px/25px --fontFamily-googleSourceSansPro"
									sm-font="400 18px/24px --fontFamily-googleSourceSansPro"
								>
									We are a startup - you will make a difference with us and shape the future for Quarkly
								</Text>
							</List>
							<List font="30px sans-serif" color="--biruza" margin="0px 0px 0px 0px">
								<Text
									color="--light"
									font="400 24px/30px --fontFamily-googleSourceSansPro"
									margin="0px 0px 0px 0px"
									text-align="left"
									md-font="400 20px/25px --fontFamily-googleSourceSansPro"
									sm-font="400 18px/24px --fontFamily-googleSourceSansPro"
									sm-margin="0px 0px 0px 0px"
									sm-padding="0px 0px 0px 0px"
								>
									That means we are also flexible in everything - both part-time and full-time options are available
								</Text>
							</List>
							{"            "}
						</StackItem>
						<StackItem
							width="50%"
							display="flex"
							flex-direction="column"
							padding="16px 0px 16px 16px"
							lg-width="100%"
							z-index="9"
						>
							<Override
								slot="StackItemContent"
								flex-direction="column"
								background="#22262E"
								padding="36px 54px 42px 54px"
								align-items="flex-start"
								border-radius="0px 12px 12px 0px"
								lg-border-radius="0px 0px 12px 12px"
								sm-padding="36px 10px 42px 10px"
							/>
							<Box
								width="100%"
								display="flex"
								align-items="center"
								margin="0px 0px 30px 0px"
								sm-justify-content="center"
							>
								<Text margin="0px 0px 0px 0px" font="normal 600 36px/42px --fontFamily-googleSourceSansPro" color="--light" sm-font="normal 500 26px/30px --fontFamily-sans">
									Feedback
								</Text>
							</Box>
							<Formspree
								errorMessage="Something went wrong"
								completeText="Success"
								endpoint="xeqpgrlv"
								width="100%"
								color="#ffffff"
								sm-font="13px sans-serif"
							>
								<Input
									display="flex"
									flex-direction="column"
									margin="0px 4px 20px 0px"
									type="text"
									border-radius="6px"
									border-width="2px"
									width="100%"
									height="60px"
									placeholder="Name"
									border-color="#637897"
									background="rgba(63, 71, 80, 0)"
									border-style="solid"
									color="#ffffff"
									font="normal 400 24px/30px --fontFamily-sans"
									letter-spacing=".8PX"
									hover-border-color="#66FFE4"
									name="Name"
									hover-border-width="2px"
									padding="13px 16px 13px 20px"
									md-font="normal 400 24px/30px --fontFamily-sans"
									sm-height="50px"
									sm-padding="10px 16px 13px 20px"
								/>
								<Input
									name="Email"
									display="flex"
									flex-direction="column"
									margin="0px 4px 20px 0px"
									type="email"
									border-radius="6px"
									border-width="2px"
									width="100%"
									height="60px"
									placeholder="Email"
									border-color="#637897"
									background="rgba(63, 71, 80, 0)"
									border-style="solid"
									color="#ffffff"
									font="normal 400 24px/30px --fontFamily-sans"
									letter-spacing=".8PX"
									hover-border-color="#66FFE4"
									required
									hover-border-width="2px"
									padding="13px 16px 13px 20px"
									md-font="normal 400 24px/30px --fontFamily-sans"
									sm-height="50px"
									sm-padding="10px 16px 13px 20px"
								/>
								<Input
									name="Phone/Messenger"
									display="flex"
									flex-direction="column"
									margin="0px 4px 20px 0px"
									type="tel"
									border-radius="6px"
									border-width="2px"
									width="100%"
									height="60px"
									background="rgba(63, 71, 80, 0)"
									hover-border-color="#66FFE4"
									color="#ffffff"
									required
									letter-spacing=".8PX"
									placeholder="Phone/Messenger"
									border-color="#637897"
									hover-border-width="2px"
									font="normal 400 24px/30px --fontFamily-sans"
									border-style="solid"
									padding="13px 16px 13px 20px"
									md-font="normal 400 24px/30px --fontFamily-sans"
									sm-font="normal 400 24px/30px --fontFamily-sans"
									sm-height="50px"
									sm-padding="10px 16px 13px 20px"
								/>
								<Input
									name="Message"
									display="flex"
									flex-direction="column"
									margin="0px 4px 30px 0px"
									type="text"
									border-radius="6px"
									border-width="2px"
									width="100%"
									height="170px"
									placeholder="Message"
									align-items="flex-start"
									justify-content="start"
									as="textarea"
									border-color="#637897"
									background="rgba(63, 71, 80, 0)"
									hover-border-color="#66FFE4"
									color="#ffffff"
									letter-spacing=".8PX"
									hover-border-width="2px"
									font="normal 400 24px/30px --fontFamily-sans"
									border-style="solid"
									padding="13px 16px 6px 20px"
									md-font="normal 400 24px/30px --fontFamily-sans"
									sm-height="140px"
								/>
								<Button
									display="flex"
									font="normal 600 19px/1.5 --fontFamily-googleSourceSansPro"
									letter-spacing="1px"
									border-radius="60px"
									padding="10px 25px 10px 25px"
									color="--dark"
									text-align="center"
									hover-background="#000000"
									hover-color="#ffffff"
									transition="all 0.3s ease"
									background="--color-secondary"
									text-transform="uppercase"
									border-width="0px"
									border-style="solid"
									border-color="#2D8FDD"
									sm-font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
									sm-padding="12px 22px 12px 22px"
								>
									SEND
								</Button>
							</Formspree>
							{"            "}
						</StackItem>
						{"        "}
					</Stack>
					{"    "}
				</StackItem>
			</Stack>
			<Components.Dots
				position="absolute"
				top="0px"
				bottom="0px"
				left="0px"
				right="0px"
			/>
		</Section>
		<Components.Footer />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});