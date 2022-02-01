const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a5531f013824e2e60d416bd5e88fade9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;