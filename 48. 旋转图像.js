var rotate = function(matrix) {
    // 转置
    for(let i=0;i<matrix.length;i++){
        for(let j=i+1;j<matrix.length;j++){
            let t = matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=t
        }
    }
    // 列倒转
    for(let i=0;i<matrix.length;i++){
        matrix[i].reverse()
    }

    
};