//获取当前svg目录所有为.svg为后缀的文件
    //false表示不会找子目录内的文件
    const req =require.context('@/assets/svg',false,/\.svg$/)
    //解析获取的.svg文件的名称，并返回
    const requireAll=(requireContext)=>{
        return requireContext.keys().map(requireContext);
    };
    requireAll(req);