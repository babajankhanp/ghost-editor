import React, {
  useEffect
} from 'react';
import dynamic from 'next/dynamic';

const DynamicMermaid = dynamic(() => import('@/components/common/Mermaid'), {
  ssr: false // Disable server-side rendering for this component
});

const example = `
graph LR
A --- B
B-->C(forbidden)
B-->D(hello)
C-->E(Hi)
C-->F(forbidden)
C-->G(forbidden)

    `;
function handleDiagram() {
  return (
    <div className="App">
      <h1>React Mermaid Example</h1>
      <DynamicMermaid chart={example} />
    </div>
  );
}

export default handleDiagram;
