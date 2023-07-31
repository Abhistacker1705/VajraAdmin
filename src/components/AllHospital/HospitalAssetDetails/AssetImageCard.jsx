import {
  DownloadDoneOutlined,
  DownloadOutlined,
  NavigateBefore,
  NavigateNext,
} from "@mui/icons-material";
import {Box, Button, Typography} from "@mui/material";
import React, {useState} from "react";
import {QrCode2} from "@mui/icons-material";

const AssetImageAndQRCard = () => {
  const [count, setCount] = useState(0);

  const images = [
    "https://harmonyhomemedical.com/cdn/shop/articles/Types-of-Medical-Supplies-729119_1200x660.jpg?v=1662070183",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnA_mXjZRy2BjhveE-QvkIeI5NV5AdaQ7bsw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtREsS3bsSA6Pl7FSZNWKf6RkMDhVfKoRm2A",
  ];

  //button image changefunction
  const handleDecrement = () => {
    if (count === 0) {
      setCount(2);
    } else setCount((prev) => prev - 1);
  };

  const handleIncrement = () => {
    if (count === 2) {
      setCount(0);
    } else setCount((prev) => prev + 1);
  };

  //download

  const download = (e, imageUrl) => {
    fetch(imageUrl, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${imageUrl}.png`); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <Box display="flex" minWidth="50%" flexDirection="column" gap="1.25rem">
      <Box
        sx={{borderRadius: "2rem", padding: "2rem"}}
        display="flex"
        flexDirection="column"
        height="8rem"
        bgcolor="#FFFFFF">
        <Box
          display="flex"
          justifyContent="center"
          alignSelf="center"
          width="fit-content"
          height="6rem">
          <Button
            sx={{fontSize: "4rem", fontWeight: "100"}}
            onClick={handleDecrement}
            variant="text"
            startIcon={<NavigateBefore />}></Button>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minWidth={{desktop: "15rem", mobile: "3rem"}}
            height={{desktop: "6rem", mobile: "8rem"}}>
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "0.75rem",
              }}
              src={images[count]}
            />
          </Box>
          <Button
            sx={{fontSize: "4rem", fontWeight: "100"}}
            onClick={handleIncrement}
            variant="text"
            startIcon={<NavigateNext />}></Button>
        </Box>
        <Button
          sx={{alignSelf: "end"}}
          onClick={(e) => download(e, images[count])}>
          <DownloadOutlined color="secondary" />
        </Button>
      </Box>

      {/* QR Code  */}

      <Box
        sx={{borderRadius: "2rem", gap: "1rem", padding: "2rem"}}
        display="flex"
        height={"8rem"}
        bgcolor="#FFFFFF">
        <Box display="flex" flexDirection="column">
          <Box width="fit-content" height="fit-content">
            <QrCode2 sx={{fontSize: "5rem"}} />
          </Box>
          <Typography color="secondary.main" variant="subtitle1">
            QR Code
          </Typography>
        </Box>
        <Typography
          display="flex"
          justifyContent="start"
          alignItems="center"
          textAlign="center"
          fontWeight="400"
          variant="subtitle2">
          To scan this Qr code and get the information
        </Typography>
      </Box>
    </Box>
  );
};

export default AssetImageAndQRCard;
