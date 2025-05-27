import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Modal,
  Divider,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Services Section Component
const Service = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Life Certificate for Pensioners (Home Visit Available for Ahmedabad,Gujarat)',
      description: 'Home-based life certificate verification for Central & State Government Pensioners, EPFO, and Defence SPARSH Pensioners.',
      details: 'We provide Life Certificate verification services for Central and State Government pensioners, EPFO beneficiaries, and Defence SPARSH pensioners. We can either visit your home for biometric authentication using IRIS Scanner, FINGER Scanner and FACE Authentication or assist you directly at our office — whichever is more convenient for you.',
    },
    {
      title: 'Life Insurance (L.I.C Of India)',
      description: 'Guidance for selecting the right life insurance policy for your future.',
      details: 'We help you choose and apply for life insurance plans that provide financial protection for your family’s future.  Our service includes need-based planning to ensure the policy you select aligns with your financial goals and responsibilities. We guide you through various policy types including term plans, endowment plans, and more — tailored to your needs.We assist with premium calculation, documentation, and application submission. Whether you’re buying a policy for the first time or reviewing your coverage, we offer trusted advice.'
    },
    {
      title: 'General Insurance',
      description: 'Vehicle insurance and mediclaim policies with complete assistance.',
      details: 'Secure your health and vehicles with our specialized general insurance services. We offer support for vehicle insurance and mediclaim (health insurance) to help you stay financially protected during emergencies. We assist in comparing plans, understanding coverage, and completing the application process without hassle. We compare policies from all available insurance companies associated with us and recommend the most suitable options based on your needs.'
    },
    {
      title: 'CSC (Common Service Center) Services',
      description: 'One-stop access to government schemes, certificates, banking, insurance, and digital services.',
      details: 'We offer a wide range of citizen-centric services through our authorized CSC center, making public services more accessible and efficient. Our offerings include Aadhaar(Aadhar-Pancard linking)/PAN/Voter(VoterId-Aadhar card linking) ID applications, certificate services (income, caste, domicile), and online utility bill payments. We provide banking and financial services, including account opening, deposits/withdrawals, and money transfers through micro-ATMs. Citizens can also access life and general insurance, telemedicine consultations, and enroll in government schemes like Ayushman Bharat, PMAY, and Mudra Loans. We support digital literacy, skill development, and education services, along with e-commerce support and digital signature certificates (DSCs) — all under one roof for your convenience.'
    },
    {
      title: 'Farmer Registration & e-KYC',
      description: 'Support for PM-Kisan registration, Aadhaar e-KYC.',
      details: 'We help farmers with registration and e-KYC updates for various agriculture-related schemes. Our support ensures accurate data submission, Aadhaar seeding, and timely verification through secure e-KYC processes.'
    },
    {
      title: 'Ticket Booking',
      description: 'Hassle-free booking for luxury buses, trains, and domestic flights.',
      details: 'We offer easy and reliable ticket booking services for luxury buses, trains (IRCTC), and domestic air travel. We assist with checking seat availability, and completing bookings with secure payment options.'
    },
    {
      title: 'Income Tax Return (ITR & accounting) Filing',
      description: 'Quick and accurate ITR filing assistance with proper guidance.',
      details: 'Filing your Income Tax Return can be confusing and time-consuming — we simplify it for you. Whether you are a salaried individual, freelancer, or small business owner, we help you file accurate and timely ITRs. We ensure all eligible deductions are claimed to maximize your refund or minimize your liability. We handle various ITR forms based on your income type.'
    },
    {
      title: 'GST Registration (GST Returns)',
      description: 'Comprehensive GST return filing services for individuals and businesses.',
      details: 'We assist in GST registration for new businesses, ensuring a smooth and error-free application process. Once registered, we support monthly, quarterly, and annual GST return filing, tailored to your business type.Our services include reconciling invoices, validating data, and timely submission of returns to avoid penalties.'
    },
    {
      title: 'PAN Card Services',
      description: 'Apply for a new PAN card or request updates/corrections with ease.',
      details: 'Need a new PAN card or want to correct details like name, date of birth, or photo? We have got you covered. We offer PAN application services for individuals, companies, and partnerships. Our support ensures accurate form submission and documentation. You get timely updates and support throughout the process, from application to delivery.'
    },
    {
      title: 'Passport Service',
      description: 'Get help with new passport applications and document verification.',
      details: 'We guide you through the entire passport application process — from filling the online form to booking the appointment. Whether it is a fresh passport, re-issue, or update, we help you gather the right documents.'
    },
    // {
    //   title: 'RTO Services',
    //   description: 'Support with vehicle registration, ownership transfer, and more.',
    //   details: 'We help with vehicle registration, ownership transfer, duplicate RC, road tax, and NOC services. we guide you through the required documents and government procedures. You will avoid long queues and paperwork errors'
    // },
    {
      title: 'Driving License Services',
      description: 'Apply for a new driving license or renew your existing one smoothly.',
      details: 'Whether you are applying for a new license, renewing an old one, or updating details — we are here to help. We assist with learners and permanent driving license applications, including slot booking as well.'
    },
    {
      title: 'Loan Solutions',
      description: 'End-to-end assistance for personal & business loan applications',
      details: 'We offer assistance with applying for various types of loans, including personal loans, business loans, education loans,Home loans, gold loans and property loans'
    },
  ];

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box id="services" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{
          fontWeight: 700,
          mb: 6,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #4A148C 0%, #7B1FA2 100%)',
            borderRadius: '2px'
          }
        }}>
          Our Services
        </Typography>

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          {services.map((service, index) => {
            const hasParentheses = service.title.includes('(');
            const mainTitle = hasParentheses
              ? service.title.split('(')[0].trim()
              : service.title;
            const parenthetical = hasParentheses
              ? service.title.match(/\(([^)]+)\)/)[1]
              : null;

            return (
              // <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
              //   <Card sx={{ 
              //     width: '100%',
              //     height: '100%',   
              //     display: 'flex',
              //     flexDirection: 'column',
              //     transition: 'transform 0.3s, box-shadow 0.3s',
              //     '&:hover': {
              //       transform: 'translateY(-5px)',
              //       boxShadow: '0 4px 20px rgba(74, 20, 140, 0.3)',
              //     }
              //   }}>
              //     {/* Card Header */}
              //     <Box sx={{
              //       height: '120px',
              //       display: 'flex',
              //       flexDirection: 'column',
              //       justifyContent: 'center',
              //       alignItems: 'center',
              //       textAlign: 'center',
              //       p: 3,
              //       background: `linear-gradient(45deg, ${index % 2 === 0 ? '#4A148C' : '#7B1FA2'}, ${index % 3 === 0 ? '#311B92' : '#9C27B0'})`,
              //       color: 'white'
              //     }}>
              //       <Typography variant="h6" component="h3" sx={{ 
              //         fontWeight: 600,
              //         mb: parenthetical ? 0.5 : 0,
              //         lineHeight: 1.2
              //       }}>
              //         {mainTitle}
              //       </Typography>
              //       {parenthetical && (
              //         <Typography variant="body2" sx={{ 
              //           fontSize: '0.85rem',
              //           fontWeight: 400,
              //           opacity: 0.9
              //         }}>
              //           ({parenthetical})
              //         </Typography>
              //       )}
              //     </Box>

              //     {/* Card Content */}
              //     <CardContent sx={{ 
              //       flexGrow: 1,
              //       display: 'flex',
              //       flexDirection: 'column',
              //       justifyContent: 'space-between', 
              //       p: 3
              //     }}>
              //       <Typography variant="body1" sx={{ 
              //         mb: 3,
              //         color: 'text.secondary',
              //         flexGrow: 1
              //       }}>
              //         {service.description}
              //       </Typography>

              //       <Button
              //         variant="outlined"
              //         color="primary"
              //         size="small"
              //         fullWidth
              //         onClick={() => handleOpenModal(service)}
              //         sx={{
              //           borderRadius: '8px',
              //           borderWidth: '1.5px',
              //           textTransform: 'none',
              //           fontWeight: 500
              //         }}
              //       >
              //         Learn More
              //       </Button>
              //     </CardContent>
              //   </Card>
              // </Grid>
              // <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
              //   <Card sx={{
              //     width: '100%',
              //     height: '100%',
              //     display: 'flex',
              //     flexDirection: 'column',
              //     transition: 'transform 0.3s, box-shadow 0.3s',
              //     border: 'none',
              //     borderRadius: '12px',
              //     background: 'white',
              //     boxShadow: '0 4px 20px rgba(74, 20, 140, 0.08)',
              //     '&:hover': {
              //       transform: 'translateY(-5px)',
              //       boxShadow: '0 8px 32px rgba(74, 20, 140, 0.15)'
              //     }
              //   }}>
              //     {/* Card Header with subtle gradient */}
              //     <Box sx={{
              //       p: 3,
              //       pb: 2,
              //       background: 'linear-gradient(to right, rgba(74, 20, 140, 0.39), rgba(123, 31, 162, 0.13))',
              //       borderBottom: '1px solid rgba(74, 20, 140, 0.05)'
              //     }}>
              //       <Typography variant="h6" component="h3" sx={{
              //         fontWeight: 700,
              //         mb: 0.5,
              //         color: 'primary.main',
              //         lineHeight: 1.3
              //       }}>
              //         {mainTitle}
              //       </Typography>
              //       {parenthetical && (
              //         <Typography variant="body2" sx={{
              //           fontSize: '0.85rem',
              //           fontWeight: 500,
              //           color: 'primary.light',
              //           mb: 1
              //         }}>
              //           ({parenthetical})
              //         </Typography>
              //       )}
              //     </Box>

              //     {/* Card Content */}
              //     <CardContent sx={{
              //       flexGrow: 1,
              //       display: 'flex',
              //       flexDirection: 'column',
              //       justifyContent: 'space-between',
              //       p: 3,
              //       pt: 0
              //     }}>
              //       <Typography variant="body1" sx={{
              //         color: 'text.secondary',
              //         mt:1,
              //         lineHeight: 1.6
              //       }}>
              //         {service.description}
              //       </Typography>

              //       <Button
              //         variant="outlined"
              //         color="primary"
              //         size="small"
              //         fullWidth
              //         onClick={() => handleOpenModal(service)}
              //         sx={{
              //           mt: 3,
              //           borderRadius: '8px',
              //           borderWidth: '1.5px',
              //           textTransform: 'none',
              //           fontWeight: 500,
              //           color: 'primary.main',
              //           '&:hover': {
              //             backgroundColor: 'rgba(74, 20, 140, 0.04)',
              //             borderWidth: '1.5px'
              //           }
              //         }}
              //       >
              //         Learn More
              //       </Button>
              //     </CardContent>
              //   </Card>
              // </Grid>
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                <Card sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  borderRadius: '12px',
                  background: 'white',
                  boxShadow: '0 2px 16px rgba(74, 20, 140, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(74, 20, 140, 0.12)',
                    '&::before': {
                      opacity: 1
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(90deg, #4A148C, #7B1FA2)',
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease'
                  }
                }}>
                  {/* Card Content */}
                  <CardContent sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 3,
                    pt: 4
                  }}>
                    {/* Service Icon Placeholder - You can replace with actual icons */}
                    <Box sx={{
                      width: 48,
                      height: 48,
                      mb: 2,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(74, 20, 140, 0.1), rgba(123, 31, 162, 0.1))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main'
                    }}>
                      {index % 3 === 0 ? '📋' : index % 3 === 1 ? '🛡️' : '💳'}
                    </Box>

                    <Typography variant="h6" component="h3" sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: 'primary.main',
                      lineHeight: 1.3,
                      fontSize: '1.3rem'
                    }}>
                      {mainTitle}
                    </Typography>

                    {parenthetical && (
                      <Typography variant="body2" sx={{
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: '#7E57C2',
                        mb: 2
                      }}>
                        ({parenthetical})
                      </Typography>
                    )}

                    <Typography variant="body1" sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                    }}>
                      {service.description}
                    </Typography>

                    <Box sx={{ mt: 'auto' }}>
                      <Button
                        variant="text"
                        color="primary"
                        size="small"
                        endIcon={<span style={{ marginLeft: 4 }}>→</span>}
                        onClick={() => handleOpenModal(service)}
                        sx={{
                          px: 0,
                          textTransform: 'none',
                          fontWeight: 600,
                          '&:hover': {
                            background: 'transparent',
                            color: 'primary.dark'
                          }
                        }}
                      >
                        Learn more
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Service Details Modal */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="service-details-modal"
          aria-describedby="service-details-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '600px' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: '12px',
            p: 4,
            outline: 'none'
          }}>
            <IconButton
              aria-label="close"
              onClick={handleCloseModal}
              sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                color: 'text.secondary'
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedService && (
              <>
                <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                  {selectedService.title}
                </Typography>
                <Divider sx={{ my: 2 }} />
                {/* <Typography variant="body1" sx={{ mb: 2 }}>
                  {selectedService.description}
                </Typography> */}
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {selectedService.details}
                </Typography>

              </>
            )}
          </Box>
        </Modal>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="#contact"
            sx={{
              borderRadius: '8px',
              px: 6,
              textTransform: 'none',
              fontWeight: 500,
              boxShadow: '0 4px 12px rgba(98, 21, 160, 0.56)'
            }}
          >
            Book a Service Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Service;