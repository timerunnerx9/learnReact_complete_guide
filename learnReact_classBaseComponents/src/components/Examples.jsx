export default function Examples(){

    return (<section id="examples">
    <h2>Examples</h2>
    <menu>
      <TabButton
        isSelected={selectedTopic === 'components'}
        onSelect={() => handleSelect('components')}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === 'jsx'}
        onSelect={() => handleSelect('jsx')}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === 'props'}
        onSelect={() => handleSelect('props')}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === 'state'}
        onSelect={() => handleSelect('state')}
      >
        State
      </TabButton>
    </menu>
    {tabContent}
  </section>);
}


