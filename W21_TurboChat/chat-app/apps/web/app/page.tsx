import {TextInput} from "@repo/ui/text";

export default function Home() {
  return (
    <div style={{height:"100vh",width:"100vw",background:"black",display:"flex",justifyContent:"center",justifyItems:"center"}}>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
        <TextInput placeholder="Room name"></TextInput>
        <button>Join Room</button>
      </div>


    </div>
  );
}

