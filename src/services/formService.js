export const addLink = ({ title, url, linkType, setLoading }) => {
  fetch("https://ill-cyan-cricket-boot.cyclic.app/api/form/addlink", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      title,
      url,
      linkType,
    }),
  })
    .then((data) => {
      console.log("==>>", { data });
      setLoading(false);
    })
    .catch((err) => err);
};
export const getLinks = ({ setLoading,setData }) => {
  fetch(`https://ill-cyan-cricket-boot.cyclic.app/api/form/getlinks`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((data) => {
      console.log("==>>", data.links);
      setData(data.links)
      setLoading(false);
    })
    .catch((err) => err);
};
