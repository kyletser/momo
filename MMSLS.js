/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=26501400&pid=f542fb78c24b1f186b7fd2a7d86f0d0b&tid=7bb04e1a42b3524d30cc9796013bea81",
    "https://www.maimemo.com/share/page?uid=26501400&pid=f542fb78c24b1f186b7fd2a7d86f0d0b&tid=7bb04e1a42b3524d30cc9796013bea81",
    "https://www.maimemo.com/share/page?uid=26501400&pid=f542fb78c24b1f186b7fd2a7d86f0d0b&tid=7bb04e1a42b3524d30cc9796013bea81",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=26501400&pid=13d165b9070c534e1c90784d539a0a09&tid=d5b0647a2dad41f9c9f8ae292856d9bd",
    "https://www.maimemo.com/share/page?uid=26501400&pid=13d165b9070c534e1c90784d539a0a09&tid=d5b0647a2dad41f9c9f8ae292856d9bd",
    "hhttps://www.maimemo.com/share/page?uid=26501400&pid=13d165b9070c534e1c90784d539a0a09&tid=d5b0647a2dad41f9c9f8ae292856d9bd",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
