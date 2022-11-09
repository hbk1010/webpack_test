const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')

module.exports = {
  // 시작점
  entry:'./js/main.js',

  // 결과문 반환하는 패스 설정
  output: {
    // ** 폴더이름, 기본 파일 안바꿔도되면 밑에 설정 생략 가능
    path:path.resolve(__dirname,'dist'),
    filename:'main.js',
    
    // ** 클린 적으면 위에 적힌 filename:'main.js' 파일 외에 다른 파일은 사라짐
    clean: true
  },

  // module
  module:{
    rules:[
      {
        test:/\.s?css$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:['babel-loader']
      }
    ]
  },

  // plugins
  plugins:[
    // 기본 html 경로 연결
    new htmlPlugin({
      template:'./index.html'
    }),
    new copyPlugin({
      patterns:[
        {from:'static'}
      ]
    })
  ]
}