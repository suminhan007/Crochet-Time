export const hexToRgba = (hex: string, opacity: number = 1) => {
    // 移除前导的 '#' 符号
    hex = hex.replace(/^#/, '');

    // 处理简写形式 (例如: #03F)
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    // 解析红、绿、蓝分量
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // 返回带有50%透明度的RGBA颜色值
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}