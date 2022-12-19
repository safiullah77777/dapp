export const addLink = ({ title, url, linkType, setLoading }) => {
  fetch(`${process.env.REACT_APP_API_URL}/api/form/addlink`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      title,
      url,
      linkType,
    }),
  })
    .then(async (data) => {
      console.log('==>>', await data.json())
      setLoading(false)
    })
    .catch((err) => err)
}
export const addPdf = ({ pdf, linkType, setLoading }) => {
  const formData = new FormData()
  formData.append('pdf', pdf)
  fetch(`${process.env.REACT_APP_API_URL}/api/form/addpdf`, {
    method: 'post',
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    body: formData,
  })
    .then(async (data) => {
      console.log('==>>', await data.json())
      setLoading(false)
    })
    .catch((err) => err)
}

export const deletePdf = ({ pdfId }) => {
  fetch(`${process.env.REACT_APP_API_URL}/api/form/deletepdf`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      pdfId,
    }),
  })
    .then(async (data) => {
      console.log('==>>', await data.json())
      // setLoading(false)
    })
    .catch((err) => err)
}
export const getLinks = ({ setLoading, setData }) => {
  fetch(`${process.env.REACT_APP_API_URL}/api/form/getlinks`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => data.json())
    .then((data) => {
      setData(data.links)
      setLoading(false)
    })
    .catch((err) => err)
}
