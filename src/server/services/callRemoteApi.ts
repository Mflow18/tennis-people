import axios from "axios";

const callRemoteApi = async () => {
  try {
    const { data: response } = await axios.get(
      "https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json"
    );

    return response.players;
  } catch (error) {
    console.log(error);
  }
};

export default callRemoteApi;
