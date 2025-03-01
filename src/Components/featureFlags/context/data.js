const flags = {
  Accordian: true,
  WhiteBlackTheme: true,
  Qrgenerator: true,
  CustomModal: true,
};

export default function dummyApiCall() {
  return new Promise((resolve, reject) => {
    if (flags) setTimeout(resolve(flags), 1000);
    else reject("some error occured");
  });
}
