import axios from "axios";
export async function handler(event, context, callback) {
  try {
    const response = await axios.get(
      "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY",
      {
        headers: { Accept: "application/json" }
      }
    );
    callback(null, {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(response.data)
    });
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
