// 每個檔案只能一個預設匯出
export default {
    myName: 'Andy',
    fn(){
        console.log('我的名字是Andy');
    }
}

// 具名匯出: 每個檔案能有多個具名匯出
export const myName= 'Andy';

export function fn(){
    console.log('我的名字是Crown');
}