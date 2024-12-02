/**
 * Calculate the required XP for a given level.
 * @param {number} level The level to calculate the required XP for.
 * @returns {number} The required XP for the given level.
 */
export const calculateRequiredXp = (level) => {
  return 10 + (level * level - 1) * 5;
};

/**
 * Increase the XP of a user, taking into account leveling up.
 * @param {number} xp The user's current XP.
 * @param {number} requiredXp The XP required to level up.
 * @param {number} level The user's current level.
 * @param {number} increaseXp The amount of XP to increase the user's XP by.
 * @returns {{level: number, xp: number, requiredXp: number}} The updated user's level, XP, and required XP.
 */
export const increaseXpFunc = ({ xp, requiredXp, level }, increaseXpAmount) => {
  if (xp >= requiredXp) {
    level += 1;
    xp = xp - requiredXp;
    requiredXp = calculateRequiredXp(level);
  } else if (xp < 0) {
    level -= 1;
    requiredXp = calculateRequiredXp(level);
    xp = requiredXp + increaseXpAmount;
  }

  return { level, xp, requiredXp };
};
