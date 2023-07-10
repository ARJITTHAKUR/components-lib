import AutoComplete from "../../components/autocomplete/Autocomplete";

export default function AutocompletePage() {
  return (
    <>
    <div className="container">

      <h1 className="heading-title">Auto compelete</h1>
    
      <section className="section-display">
        <h3 className="color-light">Default Autocomplete</h3>
        <div className="flex-and-wrap">

        <AutoComplete key={1}/>
        <AutoComplete key={2}/>
        <AutoComplete key={3}/>
        <AutoComplete key={4}/>
        <AutoComplete key={6}/>
        <AutoComplete key={7}/>
        <AutoComplete key={8}/>
        <AutoComplete key={9}/>
        <AutoComplete key={10}/>
        <AutoComplete key={11}/>


        </div>
      </section>
    </div>
    </>
  );
}
