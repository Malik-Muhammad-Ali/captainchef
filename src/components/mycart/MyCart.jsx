import {
  Box,
  Button,
  Divider,
  Grid2,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useAppStore from "../../store/store";

const MyCart = () => {
  const { language } = useAppStore();
  const isArabic = language == "ar";

  return (
    <>
      <Grid2
        sx={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          direction: isArabic ? "rtl" : "ltr", // Set text direction based on language
        }}
      >
        {/* Back Arrow Icon */}
        <Box
          sx={{
            width: { xs: "48px", sm: "56px" },
            height: { xs: "48px", sm: "56px" },
            display: "flex",
            alignItems: "center",
            m: { xs: "12px", sm: "16px" },
            justifyContent: "center",
            borderRadius: "20%",
            backgroundColor: "#fff",
          }}
        >
          <ArrowBackIosIcon
            sx={{
              fontSize: "24px",
              transform: isArabic ? "rotate(180deg)" : "rotate(0deg)", // Rotate 180 degrees for Arabic
            }}
          />
        </Box>

        {/* Main Content */}
        <Grid2
          sx={{
            display: "flex",
            // flexGrow: 1,
            padding: "12px",
            // flexDirection: "column",
          }}
        >
          <Paper
            elevation={1}
            sx={{
              padding: "20px",
              width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
              textAlign: "center",
              borderRadius: "12px",
              display: { xs: "none", sm: "block" },
            }}
          >
            {/* Headings */}
            <Box
              sx={{
                display: "grid", // Use grid for aligning items under headings
                gridTemplateColumns: "repeat(4, 1fr)", // 4 equal columns
                gap: 2,
                padding: "15px 20px",
                borderRadius: "8px",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {isArabic ? "المنتج" : "Product"}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {isArabic ? "السعر" : "Price"}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {isArabic ? "النوع" : "Type"}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", opacity: 0 }}>
                {isArabic ? "فارغ" : "Empty"}
              </Typography>
            </Box>

            {/* Product Rows */}
            {["Diteplan", "Diteplan", "Diteplan"].map((product, index) => (
              <Box
                key={index}
                sx={{
                  display: "grid", // Grid layout to align content below each heading
                  gridTemplateColumns: "repeat(4, 1fr)", // Matching the 4 columns from the heading section
                  alignItems: "center",
                  padding: "15px 20px",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  marginBottom: "25px",
                  gap: 2,
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {product}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#EACB78" }}
                >
                  {isArabic ? "١١٩٣٫٠٠ ريال" : "1193.00 SR"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#EACB78" }}
                >
                  {isArabic ? "استلام" : "Pickup"}
                </Typography>
                <Grid2>
                  <IconButton
                    sx={{
                      border: "none",
                      borderRadius: "none",
                      transition: "none",
                    }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2_150)">
                        <path
                          d="M26.2499 4.99998H22.3749C22.0848 3.58925 21.3172 2.32167 20.2014 1.41088C19.0857 0.500097 17.6901 0.0018029 16.2499 -1.52588e-05L13.7499 -1.52588e-05C12.3096 0.0018029 10.914 0.500097 9.79831 1.41088C8.6826 2.32167 7.915 3.58925 7.62488 4.99998H3.74988C3.41836 4.99998 3.10041 5.13168 2.86599 5.3661C2.63157 5.60052 2.49988 5.91846 2.49988 6.24998C2.49988 6.58151 2.63157 6.89945 2.86599 7.13387C3.10041 7.36829 3.41836 7.49998 3.74988 7.49998H4.99988V23.75C5.00186 25.407 5.66098 26.9955 6.83265 28.1672C8.00433 29.3389 9.59288 29.998 11.2499 30H18.7499C20.4069 29.998 21.9954 29.3389 23.1671 28.1672C24.3388 26.9955 24.9979 25.407 24.9999 23.75V7.49998H26.2499C26.5814 7.49998 26.8993 7.36829 27.1338 7.13387C27.3682 6.89945 27.4999 6.58151 27.4999 6.24998C27.4999 5.91846 27.3682 5.60052 27.1338 5.3661C26.8993 5.13168 26.5814 4.99998 26.2499 4.99998ZM13.7499 2.49998H16.2499C17.0252 2.50093 17.7813 2.7417 18.4144 3.18929C19.0475 3.63687 19.5266 4.26935 19.7861 4.99998H10.2136C10.4731 4.26935 10.9523 3.63687 11.5854 3.18929C12.2185 2.7417 12.9745 2.50093 13.7499 2.49998ZM22.4999 23.75C22.4999 24.7445 22.1048 25.6984 21.4015 26.4016C20.6983 27.1049 19.7444 27.5 18.7499 27.5H11.2499C10.2553 27.5 9.30149 27.1049 8.59823 26.4016C7.89497 25.6984 7.49988 24.7445 7.49988 23.75V7.49998H22.4999V23.75Z"
                          fill="#CE2729"
                        />
                        <path
                          d="M12.5 22.4992C12.8315 22.4992 13.1495 22.3675 13.3839 22.1331C13.6183 21.8987 13.75 21.5807 13.75 21.2492V13.7492C13.75 13.4177 13.6183 13.0998 13.3839 12.8653C13.1495 12.6309 12.8315 12.4992 12.5 12.4992C12.1685 12.4992 11.8505 12.6309 11.6161 12.8653C11.3817 13.0998 11.25 13.4177 11.25 13.7492V21.2492C11.25 21.5807 11.3817 21.8987 11.6161 22.1331C11.8505 22.3675 12.1685 22.4992 12.5 22.4992Z"
                          fill="#CE2729"
                        />
                        <path
                          d="M17.4998 22.4992C17.8313 22.4992 18.1493 22.3675 18.3837 22.1331C18.6181 21.8987 18.7498 21.5807 18.7498 21.2492V13.7492C18.7498 13.4177 18.6181 13.0998 18.3837 12.8653C18.1493 12.6309 17.8313 12.4992 17.4998 12.4992C17.1683 12.4992 16.8504 12.6309 16.6159 12.8653C16.3815 13.0998 16.2498 13.4177 16.2498 13.7492V21.2492C16.2498 21.5807 16.3815 21.8987 16.6159 22.1331C16.8504 22.3675 17.1683 22.4992 17.4998 22.4992Z"
                          fill="#CE2729"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_150">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </IconButton>
                </Grid2>
              </Box>
            ))}
          </Paper>

          {/* mobile paper*/}
          <Paper
            elevation={1}
            sx={{
              padding: "10px",
              width: "100%",
              textAlign: "start",
              borderRadius: "12px",
              display: { xs: "block", sm: "none" }, // Visible only on mobile screens
              backgroundColor: "#ffffff",
              marginBottom: "20px",
            }}
          >
            {/* Heading and Icon */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {isArabic ? "خطة لمرضى السكري" : "Diabetic Plan"}
              </Typography>
              <IconButton
                sx={{
                  border: "none",
                  transition: "none",
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_150)">
                    <path
                      d="M26.2499 4.99998H22.3749C22.0848 3.58925 21.3172 2.32167 20.2014 1.41088C19.0857 0.500097 17.6901 0.0018029 16.2499 -1.52588e-05L13.7499 -1.52588e-05C12.3096 0.0018029 10.914 0.500097 9.79831 1.41088C8.6826 2.32167 7.915 3.58925 7.62488 4.99998H3.74988C3.41836 4.99998 3.10041 5.13168 2.86599 5.3661C2.63157 5.60052 2.49988 5.91846 2.49988 6.24998C2.49988 6.58151 2.63157 6.89945 2.86599 7.13387C3.10041 7.36829 3.41836 7.49998 3.74988 7.49998H4.99988V23.75C5.00186 25.407 5.66098 26.9955 6.83265 28.1672C8.00433 29.3389 9.59288 29.998 11.2499 30H18.7499C20.4069 29.998 21.9954 29.3389 23.1671 28.1672C24.3388 26.9955 24.9979 25.407 24.9999 23.75V7.49998H26.2499C26.5814 7.49998 26.8993 7.36829 27.1338 7.13387C27.3682 6.89945 27.4999 6.58151 27.4999 6.24998C27.4999 5.91846 27.3682 5.60052 27.1338 5.3661C26.8993 5.13168 26.5814 4.99998 26.2499 4.99998ZM13.7499 2.49998H16.2499C17.0252 2.50093 17.7813 2.7417 18.4144 3.18929C19.0475 3.63687 19.5266 4.26935 19.7861 4.99998H10.2136C10.4731 4.26935 10.9523 3.63687 11.5854 3.18929C12.2185 2.7417 12.9745 2.50093 13.7499 2.49998ZM22.4999 23.75C22.4999 24.7445 22.1048 25.6984 21.4015 26.4016C20.6983 27.1049 19.7444 27.5 18.7499 27.5H11.2499C10.2553 27.5 9.30149 27.1049 8.59823 26.4016C7.89497 25.6984 7.49988 24.7445 7.49988 23.75V7.49998H22.4999V23.75Z"
                      fill="#CE2729"
                    />
                    <path
                      d="M12.5 22.4992C12.8315 22.4992 13.1495 22.3675 13.3839 22.1331C13.6183 21.8987 13.75 21.5807 13.75 21.2492V13.7492C13.75 13.4177 13.6183 13.0998 13.3839 12.8653C13.1495 12.6309 12.8315 12.4992 12.5 12.4992C12.1685 12.4992 11.8505 12.6309 11.6161 12.8653C11.3817 13.0998 11.25 13.4177 11.25 13.7492V21.2492C11.25 21.5807 11.3817 21.8987 11.6161 22.1331C11.8505 22.3675 12.1685 22.4992 12.5 22.4992Z"
                      fill="#CE2729"
                    />
                    <path
                      d="M17.4998 22.4992C17.8313 22.4992 18.1493 22.3675 18.3837 22.1331C18.6181 21.8987 18.7498 21.5807 18.7498 21.2492V13.7492C18.7498 13.4177 18.6181 13.0998 18.3837 12.8653C18.1493 12.6309 17.8313 12.4992 17.4998 12.4992C17.1683 12.4992 16.8504 12.6309 16.6159 12.8653C16.3815 13.0998 16.2498 13.4177 16.2498 13.7492V21.2492C16.2498 21.5807 16.3815 21.8987 16.6159 22.1331C16.8504 22.3675 17.1683 22.4992 17.4998 22.4992Z"
                      fill="#CE2729"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_150">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </IconButton>
            </Box>

            {/* Price */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#EACB78",
                marginBottom: "10px",
              }}
            >
              {isArabic ? "1193.00 ريال سعودي" : "1193.00 SR"}
            </Typography>

            {/* Delivery Type */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#EACB78",
              }}
            >
              {isArabic ? "التوصيل إلى المنزل" : "Home Delivery"}
            </Typography>

            <Divider sx={{ mt: "20px" }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {isArabic ? "خطة لمرضى السكري" : "Diabetic Plan"}
              </Typography>
              <IconButton
                sx={{
                  border: "none",
                  transition: "none",
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_150)">
                    <path
                      d="M26.2499 4.99998H22.3749C22.0848 3.58925 21.3172 2.32167 20.2014 1.41088C19.0857 0.500097 17.6901 0.0018029 16.2499 -1.52588e-05L13.7499 -1.52588e-05C12.3096 0.0018029 10.914 0.500097 9.79831 1.41088C8.6826 2.32167 7.915 3.58925 7.62488 4.99998H3.74988C3.41836 4.99998 3.10041 5.13168 2.86599 5.3661C2.63157 5.60052 2.49988 5.91846 2.49988 6.24998C2.49988 6.58151 2.63157 6.89945 2.86599 7.13387C3.10041 7.36829 3.41836 7.49998 3.74988 7.49998H4.99988V23.75C5.00186 25.407 5.66098 26.9955 6.83265 28.1672C8.00433 29.3389 9.59288 29.998 11.2499 30H18.7499C20.4069 29.998 21.9954 29.3389 23.1671 28.1672C24.3388 26.9955 24.9979 25.407 24.9999 23.75V7.49998H26.2499C26.5814 7.49998 26.8993 7.36829 27.1338 7.13387C27.3682 6.89945 27.4999 6.58151 27.4999 6.24998C27.4999 5.91846 27.3682 5.60052 27.1338 5.3661C26.8993 5.13168 26.5814 4.99998 26.2499 4.99998ZM13.7499 2.49998H16.2499C17.0252 2.50093 17.7813 2.7417 18.4144 3.18929C19.0475 3.63687 19.5266 4.26935 19.7861 4.99998H10.2136C10.4731 4.26935 10.9523 3.63687 11.5854 3.18929C12.2185 2.7417 12.9745 2.50093 13.7499 2.49998ZM22.4999 23.75C22.4999 24.7445 22.1048 25.6984 21.4015 26.4016C20.6983 27.1049 19.7444 27.5 18.7499 27.5H11.2499C10.2553 27.5 9.30149 27.1049 8.59823 26.4016C7.89497 25.6984 7.49988 24.7445 7.49988 23.75V7.49998H22.4999V23.75Z"
                      fill="#CE2729"
                    />
                    <path
                      d="M12.5 22.4992C12.8315 22.4992 13.1495 22.3675 13.3839 22.1331C13.6183 21.8987 13.75 21.5807 13.75 21.2492V13.7492C13.75 13.4177 13.6183 13.0998 13.3839 12.8653C13.1495 12.6309 12.8315 12.4992 12.5 12.4992C12.1685 12.4992 11.8505 12.6309 11.6161 12.8653C11.3817 13.0998 11.25 13.4177 11.25 13.7492V21.2492C11.25 21.5807 11.3817 21.8987 11.6161 22.1331C11.8505 22.3675 12.1685 22.4992 12.5 22.4992Z"
                      fill="#CE2729"
                    />
                    <path
                      d="M17.4998 22.4992C17.8313 22.4992 18.1493 22.3675 18.3837 22.1331C18.6181 21.8987 18.7498 21.5807 18.7498 21.2492V13.7492C18.7498 13.4177 18.6181 13.0998 18.3837 12.8653C18.1493 12.6309 17.8313 12.4992 17.4998 12.4992C17.1683 12.4992 16.8504 12.6309 16.6159 12.8653C16.3815 13.0998 16.2498 13.4177 16.2498 13.7492V21.2492C16.2498 21.5807 16.3815 21.8987 16.6159 22.1331C16.8504 22.3675 17.1683 22.4992 17.4998 22.4992Z"
                      fill="#CE2729"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_150">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </IconButton>
            </Box>

            {/* Price */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#EACB78",
                marginBottom: "10px",
              }}
            >
              {isArabic ? "1193.00 ريال سعودي" : "1193.00 SR"}
            </Typography>

            {/* Delivery Type */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#EACB78",
              }}
            >
              {isArabic ? "التوصيل إلى المنزل" : "Home Delivery"}
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </>
  );
};

export default MyCart;
