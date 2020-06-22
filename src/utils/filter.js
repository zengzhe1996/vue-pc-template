// vue全局过滤器

// 时间过滤器
export const timeFilter = value => {
  if(!value) return ''
  return value.slice(0, 16).replace('T', ' ')
}

// 身份证号脱敏('331082199708094687' 转换成 '33108219********87') 第8位开始替换8个
export const iDcardHide = value => {
  if(!value) return ''
  return value = value.replace(/(\d{8})\d{8}(\d*)/, '$1********$2')
}

// 两种导出 可以用解构的方式接收也可以用对象接收
export default{
  timeFilter,
  iDcardHide
}