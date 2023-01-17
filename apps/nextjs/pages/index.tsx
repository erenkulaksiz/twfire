import Tw from "twfire";

export default function Page() {
  //  hover:bg-neutral-400
  return (
    <div className="flex items-start">
      <h1>Web</h1>
      {/*<Tw.div bg-red-200>Tw.Div</Tw.div>
      <Tw.button bg-red-200 text-blue-600>
        tw.button :D
      </Tw.button>*/}

      <Tw.e bg-neutral-200 p-2 px-4 rounded-lg={false}>
        tw.div :D
      </Tw.e>

      <Tw.e
        tag="button"
        bg-neutral-200
        p-2
        px-4
        rounded-lg
        onClick={() => {
          alert("hey");
        }}
      >
        tw.button :D
      </Tw.e>
    </div>
  );
}
