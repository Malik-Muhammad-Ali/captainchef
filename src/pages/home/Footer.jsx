import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{
        bgcolor:"#FF9700"
    }}>
    <Box
      sx={{
        display: "flex",
        flexDirection:{xs:"column", md:"row"},
        justifyContent: {lg:"space-between",sm:"center",xs:"center"},
        alignItems: {lg:"center",sm:"center",xs:"center"},
        color: "white",
        padding: { xs: "16px", md: "24px"},
        gap:{xs:"20px",md:"unset"},
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Text Section */}
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:{lg:"center",sm:"space-between"},
        alignItems:{xs:"center", sm:"flex-start"},
        ml: { xs: 2, sm: 4, md: 8 } ,
        mr: { xs: 2, sm: 4, md: 8 } ,
        width:{lg:"40%", md:"40%",sm:"100%",xs:"100%"}
      }}>
      <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"20px"
      }}>
      <Box>
        <Typography
          variant="h6"
          gutterBottom={false}
          sx={{
            fontWeight: 600,
            fontSize: { xs: "16px", md: "32px" }, // Responsive font size
            margin:0
          }}
        >
          کابتن شیف
        </Typography>
        <Typography
          variant="h6"
          gutterBottom={false}
          sx={{
            fontWeight: 600,
            fontSize: { xs: "16px", md: "18px" }, // Responsive font size
            margin:0
          }}
        >
          Captain Chef
        </Typography>
        </Box>
        <Box>
            (<svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.45784 46.8691C5.33593 49.0134 3.89038 51.5761 3.12118 54.5573C2.63491 56.4227 1.83035 56.6275 0.707507 55.1718C-0.335766 53.812 -0.22525 52.3389 1.03906 50.7524C3.5323 47.6492 5.80452 44.411 7.8557 41.0376C7.89107 40.9853 8.68678 39.4642 10.2429 36.4743C13.4169 30.3726 18.3769 27.4176 25.1228 27.6094C26.6877 27.653 29.4948 28.3678 33.5441 29.7537C36.223 30.6777 39.0832 31.3663 42.1246 31.8196C42.3237 31.8507 42.5273 31.8411 42.7227 31.7914C42.9182 31.7417 43.1016 31.653 43.2616 31.5307C43.4217 31.4084 43.5551 31.255 43.6538 31.0799C43.7524 30.9047 43.8142 30.7116 43.8354 30.5121C44.4543 24.8113 44.578 19.7382 44.2067 15.2926C44.1907 15.1133 44.1073 14.9451 43.9712 14.8182C43.8352 14.6913 43.6554 14.6138 43.464 14.5996C36.6297 14.1115 33.7607 10.4722 34.857 3.68188C35.2195 1.4591 36.4352 0.277981 38.5041 0.138512C39.4236 0.0862119 40.9177 0.247472 42.9866 0.622293C48.2295 1.58985 51.5715 4.43588 53.0126 9.16036C53.3663 10.311 53.7774 12.9478 54.246 17.0708C54.2549 17.1318 54.6969 19.6771 55.5722 24.7067C56.6243 30.791 55.7358 36.6923 52.9066 42.4105C49.3081 49.7151 43.2651 53.4502 34.7775 53.6159C25.9892 53.7902 17.2275 51.4977 8.49227 46.7383C8.32361 46.6476 8.1316 46.6112 7.94507 46.6348C7.75854 46.6584 7.58757 46.7406 7.45784 46.8691ZM37.7614 8.55891C37.7968 9.05576 38.0001 9.47417 38.3715 9.81412C39.4147 11.2437 40.794 12.1546 42.5092 12.5468C42.7284 12.5997 42.9508 12.6084 43.1597 12.5722C43.3687 12.536 43.5588 12.4558 43.716 12.3376C44.5559 11.7187 44.7637 10.8558 44.3393 9.74875C44.3057 9.66331 44.2876 9.57267 44.2863 9.4827C44.285 9.39273 44.3005 9.30546 44.3318 9.22654C44.363 9.14762 44.4094 9.07883 44.4678 9.02463C44.5262 8.97043 44.5954 8.93203 44.6709 8.91194C45.1925 8.76375 45.6788 8.83784 46.1297 9.13421C46.2833 9.23443 46.4081 9.38603 46.4918 9.57406C46.5755 9.76208 46.6153 9.98003 46.6071 10.2064C46.3772 15.6456 46.2977 21.0849 46.3684 26.5242C46.3684 26.6375 46.2535 27.4656 46.0236 29.0084C45.8556 30.1852 46.3021 31.0743 47.3631 31.6758C47.7256 31.885 47.7123 32.0593 47.3233 32.1988C42.6462 33.8637 37.6641 33.6196 32.377 31.4666C22.3599 27.3958 15.1675 30.1721 10.7999 39.7954C10.3489 40.7804 10.6496 41.1247 11.7017 40.8284C17.9348 39.0763 24.2917 38.7974 30.7724 39.9916C34.9808 40.7674 39.4147 40.8066 44.0741 40.1092C44.5957 40.0308 44.6886 40.1921 44.3526 40.593C43.5215 41.5693 42.4606 42.0182 41.1697 41.9398C40.206 41.8875 39.7021 41.8613 39.6579 41.8613C35.3256 41.9572 32.0411 41.8439 29.8042 41.5214C23.5357 40.6061 17.3645 41.2947 11.2905 43.5872C9.761 44.1625 9.72122 44.825 11.1712 45.5746C17.9259 49.0962 25.1272 51.0139 32.7749 51.3277C36.6032 51.4846 39.649 51.0967 41.9124 50.164C44.8565 48.9524 47.3144 46.917 49.286 44.0579C52.8933 38.8017 54.2504 33.0661 53.3575 26.851C52.4733 20.6621 52.0003 16.8616 51.9384 15.4495C51.5848 8.07513 48.1544 3.80827 41.6472 2.64894C40.0027 2.35257 38.6279 2.53998 37.5227 3.21117C35.5246 4.43152 35.6041 6.2141 37.7614 8.55891Z" fill="white"/>
            </svg>)
        </Box>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "16px" },
            fontWeight: 400,
            marginTop: "4px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
      </Box>

      <Box sx={{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"flex-start",
        gap:{lg:"15px",md:"15px",sm:"10px",xs:"10px"},
        width:{lg:"40%",md:"40%",sm:"100%",xs:"100%"},
        ml: { xs: 2, sm: 4, md: 8 } ,
        mr: { xs: 2, sm: 4, md: 8 } ,
      }}>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            gap:{lg:"15px",md:"15px",sm:"10px",xs:"10px"},
        }}>
            <Box>
                <Typography sx={{
                    fontSize:{lg:"24px"},
                    fontWeight:400,
                }}>Quick Links</Typography>
            </Box>
            <Box>
                <Typography sx={{fontSize:{lg:"18px"},fontWeight:400}}>Contact us</Typography>
                <Typography sx={{fontSize:{lg:"18px"},fontWeight:400}}>Terms & Conditions</Typography>
                <Typography sx={{fontSize:{lg:"18px"},fontWeight:400}}>Refund Policy</Typography>
                <Typography sx={{fontSize:{lg:"18px"},fontWeight:400}}>FAQs</Typography>
            </Box>
        </Box>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            gap:{lg:"15px",md:"15px",sm:"10px",xs:"10px"},
        }}>
            <Box>
                <Typography sx={{
                    fontSize:{lg:"24px"},
                    fontWeight:400,
                }}>Navigations</Typography>
            </Box>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"flex-start"
            }}>
                <Typography sx={{fontSize:{lg:"18px"},fontWeight:400}}>Home</Typography>
                <Typography sx={{fontSize:{lg:"18px"},fontWeight:400}}>Subscriptions</Typography>
                <Typography sx={{fontSize:{lg:"18px"},fontWeight:400}}>Features</Typography>
            </Box>
        </Box>
      </Box>
    </Box>
    </Box>
  )
}

export default Footer
