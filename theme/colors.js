const primary = {
  darker: '#00734E',
  dark: '#009963',
  DEFAULT: '#04BF78',
  light: 'rgba(115, 230, 174, 50%)',
  lighter: 'rgba(160, 242, 200, 40%)',
  lightest: 'rgba(230, 255, 241, 50%)',
}
const success = {
  darker: '#1E7000',
  dark: '#2D9600',
  DEFAULT: '#43BC08',
  light: 'rgba(165, 227, 118, 50%)',
  lighter: 'rgba(199, 240, 163, 40%)',
  lightest: 'rgba(240, 252, 227, 50%)',
}
const warning = {
  darker: '#A67100',
  dark: '#CC9200',
  DEFAULT: '#F3B704',
  light: 'rgba(255, 236, 128, 50%)',
  lighter: 'rgba(255, 245, 168, 40%)',
  lightest: 'rgba(255, 253, 230, 50%)',
}
const error = {
  darker: '#A30B0B',
  dark: '#C91E18',
  DEFAULT: '#F0382A',
  light: 'rgba(255, 181, 166, 50%)',
  lighter: 'rgba(255, 216, 207, 40%)',
  lightest: 'rgba(255, 243, 240, 50%)',
}
const red = {
  DEFAULT: '#F0382A',
  light: '#FF8E7D',
}
const pink = {
  DEFAULT: '#E91E63',
  light: '#FF7398',
}
const purple = {
  deep: '#75178A',
  DEFAULT: '#9C27B0',
  light: '#C26DC9',
}
const indigo = {
  DEFAULT: '#3F51B5',
  light: '#8A99CF',
}
const blue = {
  DEFAULT: '#2196F3',
  light: '#75CAFF',
}
const cyan = {
  DEFAULT: '#00BCD4',
  light: '#4CE5ED',
}
const teal = {
  DEFAULT: '#009688',
  light: '#38B09C',
}
const green = {
  DEFAULT: '#43BC08',
  light: '#84D64D',
}
const lime = {
  DEFAULT: '#C8D832',
  light: '#EFF285',
}
const yellow = {
  DEFAULT: '#FFEB3B',
  light: '#FFFB8C',
}
const amber = {
  DEFAULT: '#F3B704',
  light: '#FFE057',
}
const orange = {
  deep: '#FF5722',
  DEFAULT: '#FF9800',
  light: '#FFC552',
}
const gray = {
  1: '#313C56',
  2: '#6B7885',
  3: '#95A4B3',
  4: '#B7C0CA',
  5: '#D4D7DB',
  6: '#E9EAEB',
  7: '#F0EFF4',
  8: '#F4F4F8',
  9: '#FBFCFF',
}
const white = '#FFF'
const background = {
  body: white,
  card: '#F4F4F8',
  disabled: '#F4F4F8',
  popover: white,
}
const disabled = gray['1']
const divider = gray['6']
const info = primary.DEFAULT
const mask = 'rgba(49, 60, 86, 40%)'
const black = '#000'
const title = gray['1']
const subtitle = gray['2']
const body = {
  DEFAULT: gray['1'],
  2: gray['3'],
}
const caption = gray['3']
const link = {
  DEFAULT: primary.DEFAULT,
  active: primary.DEFAULT,
  hover: primary.darker,
}

module.exports = {
  amber,
  background,
  black,
  blue,
  body,
  caption,
  cyan,
  disabled,
  divider,
  error,
  gray,
  green,
  indigo,
  info,
  lime,
  link,
  mask,
  orange,
  pink,
  primary,
  purple,
  red,
  subtitle,
  success,
  teal,
  title,
  warning,
  white,
  yellow,
}
