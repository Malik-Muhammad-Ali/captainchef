import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const PlanCustomCard = () => {
  return (
    <Box className="mealCard">
      <Card
        sx={{
          width: 261,
          padding: "16px 0px",
          height: 320,
          margin: "auto",
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: "100%",
            height: 180,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            alt="Plan Image"
            height="180"
            width="180"
            image="/meal.png"
            sx={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          {/* Top-left Icon */}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              left: 35,
              borderRadius: "50%",
              padding: "6px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              className="infoTagImg"
              width="45"
              height="45"
              viewBox="0 0 43 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="21.4082" cy="21" r="20.5" stroke="#656565" />
              <path
                d="M22.5745 10.4997C22.5745 11.144 22.0522 11.6663 21.4079 11.6663C20.7635 11.6663 20.2412 11.144 20.2412 10.4997C20.2412 9.85534 20.7635 9.33301 21.4079 9.33301C22.0522 9.33301 22.5745 9.85534 22.5745 10.4997Z"
                fill="#656565"
                stroke="#656565"
              />
              <path d="M21.4082 32.6663V16.333" stroke="#656565" />
            </svg>
          </Box>
          {/* Top-right Icon */}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 35,
              borderRadius: "50%",
              padding: "6px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
              padding: "12px",
            }}
          >
            <svg
              className="spicyTagImg"
              width="45"
              height="45"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1592_10659)">
                <path
                  d="M9.66549 25.9124C7.57498 25.8798 5.62057 25.5913 3.78049 24.7365C2.64814 24.2085 1.64099 23.5171 0.851608 22.5317C0.710063 22.3521 0.579406 22.1615 0.470526 21.9601C0.225544 21.4865 0.263653 21.04 0.58485 20.6535C0.906048 20.2724 1.37968 20.1254 1.86964 20.2888C2.46304 20.4902 3.05644 20.6971 3.64439 20.9257C6.43173 22.02 8.79988 21.2251 10.9067 19.3143C11.9846 18.3398 12.7414 17.1149 13.4545 15.8573C14.3092 14.3385 15.0279 12.7488 15.8771 11.2299C16.3997 10.2935 16.9659 9.38439 17.7281 8.61678C18.4358 7.89817 19.2633 7.38643 20.2704 7.20133C20.4283 7.17411 20.4719 7.08156 20.5263 6.9618C21.2558 5.33403 22.2466 3.88048 23.4334 2.55758C23.7492 2.20916 24.0649 2.14383 24.4732 2.25271C25.0122 2.3997 25.3715 2.74812 25.5675 3.2653C25.6328 3.43407 25.5784 3.57561 25.4749 3.71716C24.6202 4.9094 23.9179 6.18874 23.3191 7.52797C23.2211 7.74029 23.232 7.87095 23.4062 8.05605C24.5005 9.21562 24.8707 10.6202 24.7563 12.1881C24.544 15.1605 23.2919 17.6756 21.3919 19.8968C19.1708 22.4936 16.4433 24.3555 13.1606 25.368C11.9955 25.7274 10.7924 25.907 9.6546 25.9124H9.66549ZM9.5185 25.1176C10.4059 25.1394 11.2878 25.0468 12.148 24.8236C16.3997 23.7294 19.6879 21.2796 22.0942 17.6375C23.3191 15.7811 23.9996 13.7287 24.0051 11.4694C24.0051 10.8869 23.771 10.544 23.281 10.3153C23.1286 10.2445 22.9652 10.1901 22.8128 10.1193C22.7203 10.0812 22.6549 10.0867 22.6005 10.1847C22.2575 10.8597 21.6478 11.2299 20.9891 11.5293C20.5699 11.7253 20.3086 11.5511 20.3194 11.0829C20.3303 10.6093 20.2596 10.152 20.118 9.70559C20.0799 9.58037 20.0255 9.52593 19.8894 9.52593C19.2742 9.51504 18.6645 9.5586 18.0602 9.6457C17.9077 9.66748 17.7989 9.73825 17.7063 9.86346C17.4722 10.1847 17.2381 10.5113 17.0313 10.8543C16.2146 12.1826 15.5614 13.5926 14.8428 14.97C14.1949 16.2166 13.5144 17.4415 12.6597 18.5576C11.4947 20.0765 10.0956 21.2741 8.22826 21.8458C7.23201 22.1506 6.20853 22.3194 5.16328 22.1833C4.59165 22.1071 4.04181 21.9056 3.4974 21.7151C2.88223 21.4973 2.26705 21.2741 1.65188 21.0509C1.46678 20.9802 1.31979 21.0292 1.19458 21.1707C1.06937 21.3122 1.09659 21.4592 1.18369 21.6171C1.34701 21.9056 1.55389 22.167 1.78254 22.4065C2.37049 23.0217 3.05644 23.5007 3.81316 23.8818C5.60424 24.7855 7.53143 25.0904 9.51305 25.1176H9.5185ZM23.5151 9.53138C23.2429 9.03597 22.938 8.64944 22.5678 8.3228C22.3174 8.0996 22.2902 7.98527 22.4208 7.67496C22.5134 7.4572 22.6059 7.23944 22.7039 7.02168C23.2429 5.80766 23.8907 4.65353 24.6366 3.55384C24.691 3.47762 24.7781 3.41229 24.6964 3.28708C24.495 2.99855 24.1684 2.96044 23.9397 3.21086C22.7638 4.49565 21.8274 5.93288 21.1524 7.53886C21.0435 7.80562 20.8856 7.93083 20.5862 7.9635C19.9819 8.02338 19.4375 8.26292 18.9475 8.62222C18.904 8.65489 18.8332 8.67666 18.8659 8.76377C19.3286 8.7311 19.7968 8.72022 20.265 8.75288C20.4937 8.76921 20.6352 8.87265 20.7223 9.09041C20.8856 9.5096 21.0108 9.93968 21.0653 10.3915C21.0707 10.4569 21.0544 10.6147 21.1959 10.5222C21.5444 10.2935 21.8928 10.0594 21.9472 9.58582C21.9799 9.29728 22.1867 9.16663 22.4753 9.22107C22.8074 9.2864 23.1231 9.40616 23.5151 9.53682V9.53138Z"
                  fill="#F6F6F6"
                />
                <path
                  d="M13.068 3.31983C12.7142 3.89145 12.5835 4.50118 12.6216 5.14902C12.6488 5.64987 12.8122 6.10717 13.0299 6.55903C13.5308 7.61517 13.6233 8.70942 13.1442 9.78733C12.6869 10.8271 11.8649 11.4369 10.738 11.622C10.2589 11.6982 10.0847 11.5022 10.1718 11.034C10.3841 9.87988 10.1065 8.84552 9.37697 7.93092C9.1211 7.60972 8.80535 7.34841 8.46237 7.1252C6.86183 6.09084 6.13233 4.61551 6.23577 2.72099C6.2521 2.47056 6.30654 2.22014 6.34465 1.96971C6.26299 1.95338 6.22488 2.00782 6.17588 2.04593C4.39569 3.42871 3.99283 5.99285 5.26673 7.8547C5.50627 8.20312 5.71314 8.55154 5.76758 8.98162C5.89279 9.99421 5.28851 10.985 4.32491 11.3389C3.35043 11.6927 2.27796 11.3225 1.72267 10.4352C1.68456 10.3698 1.64101 10.3045 1.6029 10.2392C1.48858 10.2664 1.49947 10.3698 1.47225 10.4406C0.312667 13.7288 1.92954 17.4743 5.1143 18.8952C5.19052 18.9279 5.27218 18.9605 5.34839 18.9986C5.61515 19.1238 5.71314 19.3307 5.61515 19.5485C5.51716 19.7717 5.2994 19.837 5.03264 19.7281C3.99827 19.2926 3.09456 18.6665 2.33785 17.8445C-0.00853002 15.2912 -0.351504 11.5131 1.48858 8.5842C1.53757 8.50799 1.59201 8.42633 1.66279 8.36644C1.79889 8.25212 1.95676 8.24667 2.1092 8.34467C2.2834 8.45899 2.32151 8.6332 2.26163 8.8183C2.17452 9.0905 2.14186 9.36814 2.22352 9.64579C2.38684 10.2011 2.75159 10.5604 3.31777 10.6584C3.90572 10.7618 4.39569 10.5549 4.72777 10.0541C5.05986 9.55324 5.10341 9.03061 4.74955 8.52976C4.07993 7.59339 3.71518 6.56447 3.72063 5.41578C3.72607 3.37427 5.03264 1.46342 6.92172 0.690366C7.12314 0.608706 7.3028 0.58693 7.45523 0.761138C7.60222 0.924459 7.56411 1.09867 7.47156 1.28376C6.48619 3.22184 7.04693 5.27424 8.87068 6.47192C10.3025 7.41374 11.0211 8.74753 11.0047 10.4624C11.0047 10.7673 11.0047 10.7781 11.2878 10.642C12.2405 10.1793 12.774 9.11772 12.6216 8.00169C12.5563 7.53895 12.4038 7.11432 12.2024 6.70057C11.4511 5.11092 11.7941 3.22184 13.0462 1.99693C13.1932 1.85539 13.3457 1.73562 13.5634 1.83361C13.7812 1.9316 13.8084 2.11126 13.7975 2.32357C13.7213 3.40693 14.184 4.17999 15.1204 4.7135C16.3344 5.40489 16.9496 6.47192 17.0095 7.86015C17.0258 8.18679 16.868 8.37189 16.6066 8.36644C16.3562 8.36644 16.2201 8.19223 16.2147 7.87648C16.1874 6.85845 15.7737 6.02551 14.8972 5.51377C14.0153 4.99659 13.3402 4.34331 13.0517 3.33072L13.068 3.31983Z"
                  fill="#F6F6F6"
                />
                <path
                  d="M7.18852 13.3043C6.85644 13.9848 6.75845 14.6544 6.84555 15.3512C6.94899 16.1515 7.29196 16.8429 7.84725 17.4254C8.04324 17.6323 8.05957 17.8718 7.89625 18.0351C7.71659 18.2093 7.50428 18.193 7.29196 17.9807C5.78397 16.5162 5.60431 13.9086 6.89999 12.2645C7.15586 11.9378 7.49339 11.9814 7.64582 12.3625C8.17389 13.7071 9.1266 14.5673 10.5312 14.9266C10.8142 14.9974 10.9503 15.1933 10.8905 15.4166C10.8251 15.6561 10.6183 15.765 10.3188 15.6888C9.07216 15.373 8.08679 14.6816 7.38451 13.6037C7.33007 13.5166 7.27563 13.4349 7.19397 13.3043H7.18852Z"
                  fill="#F6F6F6"
                />
                <path
                  d="M17.7497 13.6907C17.7388 13.7234 17.7333 13.7833 17.7116 13.8377C16.9548 15.4328 16.2253 17.0443 15.1692 18.476C15.0875 18.5849 15.0059 18.6938 14.9188 18.7972C14.75 18.9932 14.5377 19.0259 14.358 18.8898C14.1729 18.7482 14.1348 18.5305 14.2927 18.329C15.4033 16.9245 16.1382 15.3022 16.9058 13.7071C16.9494 13.6145 16.9929 13.5165 17.0528 13.4403C17.1617 13.2988 17.3087 13.2443 17.4829 13.3097C17.6517 13.3695 17.7442 13.4948 17.7551 13.7016L17.7497 13.6907Z"
                  fill="#F6F6F6"
                />
                <path
                  d="M19.4756 10.7946C19.4756 10.9198 19.4321 11.0015 19.3722 11.0777C19.2415 11.241 19.1054 11.4098 18.9693 11.5731C18.806 11.7636 18.5774 11.7909 18.4031 11.6548C18.2398 11.5241 18.2017 11.2954 18.3378 11.1049C18.4794 10.9144 18.6264 10.7293 18.7897 10.5551C18.9094 10.4298 19.0564 10.3863 19.2306 10.4625C19.3885 10.5333 19.4538 10.6639 19.4702 10.8L19.4756 10.7946Z"
                  fill="#F6F6F6"
                />
              </g>
              <defs>
                <clipPath id="clip0_1592_10659">
                  <rect
                    width="25.2929"
                    height="25.2875"
                    fill="white"
                    transform="translate(0.3125 0.625)"
                  />
                </clipPath>
              </defs>
                        
            </svg>
          </Box>
          {/* Recommended Button */}
          <Box
            sx={{
              position: "absolute",
              bottom: 2,
              backgroundColor: "#20A00B",
              borderRadius: 1,
              px: 2,
              py: 0.5,
              textAlign: "center",
            }}
          >
            <Typography
              variant="body"
              sx={{ color: "white", fontSize: "1.1rem", fontWeight: "light" }}
            >
              Recommended
            </Typography>
          </Box>
        </Box>

        {/* Content Section */}
        <CardContent sx={{ padding: "8px 12px", textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "light", fontSize: "22px", mb: 1 }}
          >
            Zukini Peena Pasta
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            {/* Box 1: 1080 KCal */}
            <Box display="flex" alignItems="center" gap={0}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7826 1.5C12.0022 1.62433 12.1254 1.79201 12.1231 2.06463C12.1083 4.01574 12.8269 5.67827 14.1244 7.11322C14.8801 7.94933 15.6894 8.73583 16.4046 9.60958C17.7124 11.2071 18.3837 13.0373 18.4367 15.0945C18.4436 15.3677 18.52 15.4464 18.7915 15.4361C19.3492 15.4144 19.9087 15.427 20.4677 15.4304C21.7948 15.4378 22.7558 16.3201 22.8368 17.6467C22.8762 18.2883 22.875 18.9362 22.8391 19.5784C22.7644 20.8999 21.8011 21.7942 20.4728 21.7993C18.8245 21.8056 17.1763 21.801 15.528 21.801C15.4054 21.801 15.2868 21.7965 15.1761 21.8757C13.9277 22.7712 12.5189 23.0985 11.0007 23.0985C8.35264 23.0991 6.21047 22.0565 4.55251 20.0153C3.92229 19.2374 3.54416 18.3311 3.41583 17.3296C3.40785 17.2663 3.38332 17.2053 3.36621 17.1431C3.36621 16.8209 3.36621 16.4986 3.36621 16.1758C3.38047 16.141 3.40328 16.1068 3.40727 16.0709C3.53275 14.9622 4.00498 13.9886 4.57304 13.051C4.97969 12.3791 5.42226 11.7289 5.77701 11.0257C6.23214 10.1234 6.44487 9.1784 6.29031 8.16777C6.26123 7.97614 6.32852 7.82785 6.48879 7.73318C6.64392 7.64192 6.79734 7.68299 6.93992 7.7828C8.20892 8.66453 8.79921 9.83714 8.5129 11.3999C8.39713 12.0324 8.23686 12.6574 8.20264 13.3042C8.17641 13.7953 8.39085 14.142 8.80948 14.3724C9.81384 14.9245 10.9961 14.4106 11.2756 13.3008C11.4746 12.5103 11.3013 11.7614 11.0087 11.028C10.6614 10.1565 10.2034 9.33753 9.80642 8.48944C8.8494 6.44365 9.07924 4.54102 10.4623 2.76557C10.7247 2.42907 11.0024 2.10684 11.295 1.796C11.4062 1.67794 11.5265 1.57757 11.6686 1.50057C11.7068 1.5 11.745 1.5 11.7826 1.5ZM7.17832 9.04609C7.12528 9.37289 7.09049 9.66034 7.03004 9.94265C6.82243 10.9031 6.3348 11.7369 5.82663 12.5605C5.42911 13.205 5.01448 13.8397 4.69224 14.5276C4.29586 15.3739 4.06886 16.254 4.19434 17.1979C4.37456 18.5564 5.0812 19.6172 6.08956 20.4955C7.92375 22.0942 10.0733 22.5447 12.4282 22.1849C12.8201 22.125 13.1993 21.979 13.6134 21.7651C13.505 21.7548 13.468 21.7503 13.4303 21.748C12.2805 21.6773 11.4142 20.8971 11.2545 19.7575C11.1678 19.137 11.2254 18.5085 11.2231 17.8834C11.218 16.3583 12.1796 15.4013 13.7064 15.399C14.9189 15.3973 16.132 15.3922 17.3445 15.4042C17.5778 15.4064 17.6497 15.3523 17.64 15.1087C17.5658 13.2717 16.9978 11.6229 15.8343 10.1856C15.1293 9.31528 14.324 8.53678 13.582 7.70067C12.7436 6.7562 12.0587 5.72161 11.6817 4.50281C11.5265 4.00034 11.4364 3.48362 11.3606 2.9458C11.3127 2.97773 11.2853 2.988 11.2688 3.00796C10.1212 4.39787 9.65471 5.91895 10.3403 7.67843C10.6471 8.46549 11.0555 9.20236 11.4113 9.96489C11.8476 10.8991 12.1859 11.8527 12.1254 12.9118C12.0353 14.4922 10.8809 15.5319 9.3416 15.3774C8.36747 15.2793 7.20342 14.5407 7.4287 13.0116C7.5268 12.346 7.6939 11.6941 7.77375 11.0263C7.86215 10.2951 7.70417 9.64094 7.17832 9.04609ZM17.0189 20.9729C18.1841 20.9729 19.3487 20.9803 20.5139 20.9706C21.391 20.9632 22.0081 20.3832 22.0481 19.5123C22.0754 18.9072 22.0743 18.2992 22.0486 17.6941C22.0116 16.8226 21.387 16.23 20.5219 16.2283C18.2012 16.2232 15.881 16.2232 13.5604 16.2283C12.6598 16.23 12.0302 16.8665 12.0187 17.7711C12.0125 18.2826 12.017 18.7942 12.0176 19.3058C12.0193 20.3723 12.6216 20.9718 13.6944 20.9735C14.8025 20.974 15.9107 20.9729 17.0189 20.9729Z"
                  fill="#1F1F1F"
                />
                <path
                  d="M20.0821 18.9984C20.0821 19.263 20.0872 19.5282 20.0809 19.7929C20.073 20.1157 19.9264 20.2634 19.6116 20.2702C19.3561 20.2759 19.1005 20.2771 18.8456 20.2697C18.3386 20.2548 18.0272 19.9258 18.0055 19.3919C17.981 18.7931 18.2399 18.4366 18.7521 18.371C18.8639 18.3568 18.9785 18.3648 19.0914 18.3551C19.1673 18.3488 19.2796 18.3898 19.2802 18.2518C19.2802 18.1418 19.2152 18.0705 19.1057 18.0659C18.8981 18.0579 18.6893 18.0642 18.4817 18.0596C18.1846 18.0528 18.0066 17.8948 18.0112 17.6478C18.0158 17.4026 18.1926 17.256 18.4966 17.2509C18.695 17.248 18.8941 17.2475 19.0926 17.2509C19.6663 17.2606 20.0524 17.629 20.0787 18.2033C20.0906 18.4674 20.0809 18.7332 20.0809 18.9978C20.0809 18.9984 20.0815 18.9984 20.0821 18.9984ZM19.0732 19.1341C18.9591 19.1393 18.8308 19.0999 18.8365 19.2864C18.8422 19.4649 18.9711 19.4079 19.0589 19.4085C19.157 19.409 19.2962 19.4644 19.3002 19.2733C19.3053 19.0748 19.1593 19.1535 19.0732 19.1341Z"
                  fill="#1F1F1F"
                />
                <path
                  d="M14.2309 17.7288C14.2834 17.6638 14.3364 17.5993 14.3877 17.5332C14.5834 17.2816 14.8155 17.224 15.0168 17.3775C15.2045 17.5206 15.2056 17.7334 15.018 18.0043C14.9261 18.1366 14.8377 18.2717 14.7356 18.3955C14.6478 18.5016 14.6558 18.5854 14.7328 18.6944C14.9296 18.9721 15.1178 19.2567 15.3054 19.5407C15.4657 19.7837 15.4389 19.9999 15.2387 20.1356C15.0436 20.2679 14.8286 20.2097 14.6558 19.9759C14.5155 19.7866 14.378 19.5949 14.2383 19.405C14.2349 19.3999 14.2218 19.4016 14.1733 19.3936C14.1733 19.5339 14.1796 19.6708 14.1721 19.8065C14.1579 20.0654 13.9982 20.2274 13.7626 20.216C13.5163 20.2046 13.3714 20.0649 13.3691 19.8202C13.3623 18.9773 13.3617 18.1343 13.3691 17.2913C13.3714 17.0393 13.5545 16.8659 13.7832 16.8853C14.0233 16.9052 14.163 17.0415 14.1727 17.2896C14.1779 17.4294 14.1739 17.5691 14.1739 17.7094C14.1921 17.7162 14.2115 17.7225 14.2309 17.7288Z"
                  fill="#1F1F1F"
                />
                <path
                  d="M15.7068 18.6917C15.7068 18.54 15.7 18.3883 15.708 18.2372C15.7342 17.7284 16.0947 17.3269 16.5977 17.2408C16.8515 17.1974 17.1082 17.2089 17.3625 17.2243C17.6232 17.2397 17.7726 17.4096 17.7652 17.6446C17.7578 17.875 17.5981 18.0279 17.3346 18.0415C17.1549 18.0512 16.9747 18.0438 16.795 18.0455C16.5994 18.0478 16.4979 18.1419 16.5002 18.3438C16.503 18.5805 16.503 18.8172 16.5002 19.0539C16.4973 19.282 16.6142 19.3807 16.8338 19.3784C16.9947 19.3767 17.1561 19.3727 17.3163 19.3813C17.6009 19.3961 17.7646 19.5484 17.7657 19.7885C17.7669 20.0303 17.6015 20.1911 17.3232 20.2031C17.1344 20.2117 16.9439 20.2122 16.7551 20.2025C16.1449 20.1712 15.7182 19.728 15.7046 19.1172C15.7017 18.9752 15.704 18.8332 15.704 18.6912C15.7057 18.6917 15.7063 18.6917 15.7068 18.6917Z"
                  fill="#1F1F1F"
                />
                <path
                  d="M20.322 18.5612C20.322 18.1734 20.3186 17.785 20.3232 17.3972C20.3266 17.0897 20.472 16.9152 20.7178 16.9061C20.9734 16.897 21.1427 17.0761 21.1462 17.3966C21.1536 18.1728 21.1524 18.949 21.1467 19.7247C21.1445 20.0486 20.9836 20.2214 20.7213 20.2135C20.4743 20.2055 20.3272 20.0315 20.3232 19.7253C20.3186 19.3374 20.322 18.949 20.322 18.5612Z"
                  fill="#1F1F1F"
                />
              </svg>
              <Typography variant="body2" sx={{ color: "#515151" }}>
                1080 KCal
              </Typography>
            </Box>

            {/* Box 2: Rating */}
            <Box display="flex" alignItems="center" gap={1}>
              <StarIcon sx={{ color: "#FFD700", fontSize: 20 }} />
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: 500 }}
              >
                4.5 (32)
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#D92531",
              color: "#fff",
              borderRadius: 2,
              width: "85%",
              py: 0.5,
              fontWeight: "bold",
              fontSize: "0.8rem",
              my: "10px",
              height: "40px",
            }}
          >
            Select
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PlanCustomCard;