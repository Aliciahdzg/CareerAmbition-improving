import React from "react";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
const TimeLine = () => {
    const theme = useTheme();
    const [progressCount, setCurrentStepCount] = React.useState(0);
    const handleBack = () => {
        setCurrentStepCount((prevActiveStep) => prevActiveStep - 1);
    };
    const handleNext = () => {
        setCurrentStepCount((prevActiveStep) => prevActiveStep + 1);
    };
    return (
        <div
            style={{
                fontSize: "2px",
            }}
        >
            <MobileStepper
                steps={6}
                activeStep={progressCount}
                position="static"
            variant="progress"
            style={{
                maxWidth: 400,
                flexGrow: 1,
            }}
            backButton={
                <Button
                    style={{
                        fontSize: "10px",
        }}
            onClick={handleBack}
            disabled={progressCount === 0}
        >
            {theme.direction !== "rtl" ? (
            <KeyboardArrowLeft />
            ) : (
            <KeyboardArrowRight />
            )}
            (-)
        </Button>
        }
nextButton = {
        < Button
style = {{
    fontSize: "10px",
}}
onClick = { handleNext }
disabled = { progressCount === 5}
        >
    (+)
{
    theme.direction !== "rtl" ?(
        <KeyboardArrowRight />
    ) : (
        <KeyboardArrowLeft />
    )
}
        </Button >
        }
/>
    </div >
);
};
export default TimeLine;