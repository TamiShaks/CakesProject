// import React from 'react';
// import { useSelector } from 'react-redux';
// import RecepiesProduct from './RecepiesProduct';



//     export default function ReceipessGallery() {

//         const myRecepiesCakesList = useSelector((state) => state.myRecepiesCakesList.myRecepiesCakesList) || [];


    
//     console.log("### before the filter myrecepeislist:",myRecepiesCakesList)
//         return (
//             <div className="container">
//                 <div className="row">
//                     <p>birthday</p>
//                     {myRecepiesCakesList.filter(cake => cake.typeEvent === "birthday").map(cake => (
//                         <div key={cake.id} className="col-2 col-sm-4 col-md-3 mb-4"> {/* Reduced size for the products */}
//                             <RecepiesProduct {...cake} />
//                         </div>
//                     ))},
//                     <p>bar</p>
//                     {myRecepiesCakesList.filter(cake => cake.typeEvent === "bar").map(cake => (
//                         <div key={cake.id} className="col-2 col-sm-4 col-md-3 mb-4"> {/* Reduced size for the products */}
//                             <RecepiesProduct {...cake} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
    // }


    import React from 'react';
    import { useSelector } from 'react-redux';
    import { Box, Typography, Grid, Divider, Rating } from '@mui/material';
    import RecepiesProduct from './RecepiesProduct';
    
    export default function ReceipessGallery() {
        const myRecepiesCakesList = useSelector(
            (state) => state.myRecepiesCakesList.myRecepiesCakesList
        ) || [];
    
        const renderCategory = (type, label) => (
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: 'cursive',
                        textAlign: 'center',
                        mb: 3
                    }}
                >
                    {label}
                </Typography>
                <Grid container justifyContent="center" spacing={3}>
                    {myRecepiesCakesList
                        .filter(cake => cake.typeEvent === type)
                        .map(cake => (
                            <Grid item key={cake.id} xs={12} sm={6} md={4} lg={3}>
                                <RecepiesProduct {...cake} />

                            </Grid>
                        ))}
                </Grid>
            </Box>
        );
    
        return (
            <Box sx={{ maxWidth: '1200px', margin: 'auto', p: 3 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: '"Cinzel Decorative", cursive',
                        textAlign: 'center',
                        mb: 6,
                        fontWeight: 600,
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                    }}
                >
                    The Selected Recipes
                </Typography>
    
                {renderCategory("birthday", "Birthday")}
                <Divider sx={{ width: '70%', mx: 'auto', my: 4, height: '2px', backgroundColor: '#555', borderRadius: '1px' }} />
                {renderCategory("bar", "Bar")}
                <Divider sx={{ width: '70%', mx: 'auto', my: 4, height: '2px', backgroundColor: '#555', borderRadius: '1px' }} />
                {renderCategory("wedding", "Wedding")}
            </Box>
        );
    }
    

 
