import React from "react";
import { Button } from "createistic-designsystem";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CBProps = {
  codeString: string;
};

const ComponentWrapper: React.FC<{}> = ({ children }) => {
  return <div style={{ margin: 10 }}>{children}</div>;
};

const CodeBlock: React.FC<CBProps> = ({ codeString }) => (
  <SyntaxHighlighter language="javascript" style={docco}>
    {codeString}
  </SyntaxHighlighter>
);

const App = () => {
  return (
    <div>
      <ComponentWrapper>
        <h1>Button</h1>
      </ComponentWrapper>
      <ComponentWrapper>
        <Button text="click me" />
      </ComponentWrapper>
      <ComponentWrapper>
        <Button text="click me" type="secondary" />
      </ComponentWrapper>
      <ComponentWrapper>
        <Button text="click me" type="outline" />
      </ComponentWrapper>
      <ComponentWrapper>
        <h2>Code examples</h2>
      </ComponentWrapper>
      <ComponentWrapper>
        <CodeBlock codeString={'<Button type="primary" title="click me" />'} />
        <CodeBlock
          codeString={'<Button type="secondary" title="click me" />'}
        />
        <CodeBlock codeString={'<Button type="outline" title="click me" />'} />
      </ComponentWrapper>
      <ComponentWrapper>
        <hr />
      </ComponentWrapper>
    </div>
  );
};

export default App;
