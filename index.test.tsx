// 導入手順
// おそらく、不要なパッケージや、役割が重複しているパッケージがありそう
// 1. npm install --save-dev jest @testing-library/react @testing-library/jest-dom ts-jest 
// 2. jest.config.jsを作成
// 3. npm run test で実行するため、 package.jsonのscriptsに "test": "jest" を追加
// 4. npm install --save-dev jest-environment-jsdom
// 5. npm install --save-dev @types/jest
// 6. tsconfig.json の修正
// 7. index.test.tsx を作成
// 参考
// https://zenn.dev/ncdc/articles/643ce209494d99
// https://testing-library.com/docs/react-testing-library/intro/
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Index from './index';

test('renders HelloWorld', () => {
  render(<Index />);
  const linkElement = screen.getByText(/hoge/i);
  expect(linkElement).toBeInTheDocument();
})
