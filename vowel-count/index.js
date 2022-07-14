const onlyVowelsRegex = new RegExp(/[^aeiou]+/, 'gi')

const getCount = string => string.replace(onlyVowelsRegex, '').length
