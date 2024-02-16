import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../state/store";

import { checkFsAction, checkIaAction, highlightFsBulbAction, highlightIaBulbAction } from "./Home.redux";
import HomeSelectors from "./Home.selectors";
import "./home.css";

const Home = () => {
	const { isFsCheck, isIACheck, isFsHighlight, isIaHighlight } = useAppSelector(HomeSelectors);
	const dispatch = useAppDispatch();

	/** *****  Fs Checkbox and light bulb  ******* */

	const toggleFsCheck = useCallback(() => {
		dispatch(checkFsAction(!isFsCheck));
	}, [dispatch, isFsCheck]);

	const toggleFsHighlight = useCallback(() => {
		if (isFsCheck) {
			dispatch(highlightFsBulbAction(!isFsHighlight));
		}
	}, [dispatch, isFsCheck, isFsHighlight]);

	/** *****  Ia Checkbox and light bulb  ******* */
	const toggleIaCheck = useCallback(() => {
		dispatch(checkIaAction(!isIACheck));
	}, [dispatch, isIACheck]);

	const toggleIaHighlight = useCallback(() => {
		if (isIACheck) {
			dispatch(highlightIaBulbAction(!isIaHighlight));
		}
	}, [dispatch, isIACheck, isIaHighlight]);

	/* ************ light bulb classes ************ */
	const getBulbClasses = (isLight: boolean, dependentCheckbox: boolean) => {
		const classes = ["bulb"];

		if (!dependentCheckbox) {
			classes.push("disable-bulb");
		} else if (isLight) {
			classes.push("light-bulb");
		}

		return classes.join(" ");
	};

	return (
		<div className="container">
			<div className="section-wrapper">
				<FormGroup>
					<FormControlLabel
						control={<Checkbox checked={isFsCheck} onChange={toggleFsCheck} />}
						label="Check FS"
						labelPlacement="start"
					/>
				</FormGroup>
				<LightbulbIcon className={getBulbClasses(isFsHighlight, isFsCheck)} onClick={toggleFsHighlight} />
			</div>

			<div className="section-wrapper">
				<FormGroup>
					<FormControlLabel
						control={<Checkbox checked={isIACheck} onChange={toggleIaCheck} />}
						label="Check IA"
						labelPlacement="start"
					/>
				</FormGroup>
				<LightbulbIcon className={getBulbClasses(isIaHighlight, isIACheck)} onClick={toggleIaHighlight} />
			</div>
		</div>
	);
};

export default Home;
