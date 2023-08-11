// Given a string S that consists of only alphanumeric characters and dashes.
// The string is separated into N + 1 groups by N dashes. Also given an integer K.
// We want to reformat the string S, such that each group contains exactly K characters, except for the first group,
// which could be shorter than K but still must contain at least one character.
// Furthermore, a dash must be inserted between two groups, and you should convert all lowercase letters to uppercase.
// Return the reformatted string.

// ## Examples

// Input: S = “5F3Z-2e-9-w”, K = 4 \
// Output: “5F3Z-2E9W” \
// Explanation: The string S has been split into two parts, each part has 4 characters.

// Note that two extra dashes are not needed and can be removed: \
// Input: S = “2-5g-3-J”, K = 2 \
// Output: “2-5G-3J” \


function reformatString(str, k) {
  let arrStr = str.replace(/-/g, '');
  arrStr = arrStr.toUpperCase();
  let strResult = [];
  for (let index = arrStr.length; index > 0; index -= k) {
    const max = Math.max(index-k, 0)
    const group = arrStr.slice(max, index);
    strResult.unshift(group);
  }
  console.log(strResult.join('-'));
}

reformatString('5F3Z-2e-9-w', 4);
reformatString('2-5g-3-J', 2);