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
    
    "https://www.maimemo.com/share/page?uid=26501400&pid=ccfb828a22f88a041b72faf8d7df6d9d&tid=e65e9071e6d2cf53ce6259174cad3841",
    "https://www.maimemo.com/share/page?uid=26501400&pid=ccfb828a22f88a041b72faf8d7df6d9d&tid=e65e9071e6d2cf53ce6259174cad3841",
    "https://www.maimemo.com/share/page?uid=26501400&pid=ccfb828a22f88a041b72faf8d7df6d9d&tid=e65e9071e6d2cf53ce6259174cad3841",
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
