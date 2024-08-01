const liveHost = "https://us-central1-mealstogo-c4448.cloudfunctions.net";
const localHost = "http://localhost:5000/mealstogo-c4448/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

// export const host = isDevelopment ? localHost : liveHost;
export const host = liveHost;
export const isMock = true;
