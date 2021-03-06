import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { ArrowBack, ArrowForward, Cached, Settings } from "@material-ui/icons";
import styles from "./Navigation.module.scss";
import useNavigation from "../../hooks/useNavigation/useNavigation";

/**
 * Navigation component props type
 */
export type NavigationProps = {
  bgColor: string;
  color: string;
};

/**
 * Navigation component
 * @param bgColor - to be set to navigation
 * @param color - to be set to navigation buttons
 */
const Navigation: React.FC<NavigationProps> = ({ bgColor, color }) => {
  const [, nextLevel, previousLevel, resetLevels, goToSettings] = useNavigation();

  return (
    <BottomNavigation className={styles.navigation} style={{ backgroundColor: bgColor }} showLabels>
      <BottomNavigationAction
        style={{ color }}
        onClick={previousLevel as any}
        label="Back"
        icon={<ArrowBack />}
      />
      <BottomNavigationAction
        style={{ color }}
        onClick={nextLevel as any}
        label="Forward"
        icon={<ArrowForward />}
      />
      <BottomNavigationAction
        style={{ color }}
        onClick={goToSettings as any}
        label="Settings"
        icon={<Settings />}
      />
      <BottomNavigationAction
        style={{ color }}
        onClick={resetLevels as any}
        label="Reset"
        icon={<Cached />}
      />
    </BottomNavigation>
  );
};

export default Navigation;
