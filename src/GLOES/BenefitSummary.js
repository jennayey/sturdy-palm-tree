import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function BenefitSummary(props) {
  return (
    <div>
      <Typography variant="h5" color="text.primary">Benefit Summary</Typography>
      <br />
      <Typography variant="overline">General Information</Typography>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <Typography variant="caption">Policy Number</Typography>
            <Typography variant="subtitle1">
              T-20-077
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={6} xl={4}>
            <Typography variant="caption">Policy Holder</Typography>
            <Typography variant="subtitle1" >
              Samsung Electro-Mechanics Philippines Corporation
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={4} xl={4}>
            <Typography variant="caption">Period Coverage</Typography>
            <Typography variant="subtitle1">
              07/14/2020 - 07/13/2021
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <br />
      <Typography variant="overline">Description of Benefits</Typography>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
          morbi non arcu risus quis. Molestie nunc non blandit massa enim nec
          dui nunc mattis. Egestas integer eget aliquet nibh. Sem fringilla ut
          morbi tincidunt augue interdum velit euismod. Felis eget nunc lobortis
          mattis. Etiam dignissim diam quis enim lobortis scelerisque fermentum
          dui. Quis lectus nulla at volutpat. Purus gravida quis blandit turpis
          cursus in. Justo laoreet sit amet cursus sit amet dictum sit amet. Sit
          amet tellus cras adipiscing enim eu. Ut placerat orci nulla
          pellentesque. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper
          sit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin.
          Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.
          Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum
          odio. Mollis nunc sed id semper risus in. Est sit amet facilisis magna
          etiam tempor orci eu lobortis. Id semper risus in hendrerit gravida
          rutrum. Fermentum iaculis eu non diam phasellus vestibulum lorem. Dis
          parturient montes nascetur ridiculus. Quam nulla porttitor massa id
          neque aliquam. At ultrices mi tempus imperdiet nulla malesuada. In
          fermentum et sollicitudin ac. Volutpat commodo sed egestas egestas
          fringilla phasellus faucibus. Velit scelerisque in dictum non
          consectetur a erat. Volutpat lacus laoreet non curabitur gravida arcu
          ac tortor dignissim. Volutpat odio facilisis mauris sit amet massa
          vitae tortor. Vivamus arcu felis bibendum ut. At elementum eu
          facilisis sed. Nec sagittis aliquam malesuada bibendum arcu. Dui
          faucibus in ornare quam viverra. Mauris in aliquam sem fringilla ut
          morbi tincidunt augue. Pharetra et ultrices neque ornare aenean
          euismod elementum nisi quis. Quis hendrerit dolor magna eget est lorem
          ipsum dolor sit. Eget nunc scelerisque viverra mauris in aliquam sem.
          Nibh ipsum consequat nisl vel pretium. Diam maecenas ultricies mi
          eget. Varius sit amet mattis vulputate. Dolor purus non enim praesent
          elementum. Tempor nec feugiat nisl pretium fusce id velit ut tortor.
          Sociis natoque penatibus et magnis dis parturient montes nascetur
          ridiculus. Et ligula ullamcorper malesuada proin libero nunc consequat
          interdum varius. Quis risus sed vulputate odio ut enim blandit. Sit
          amet massa vitae tortor. Tristique nulla aliquet enim tortor at auctor
          urna nunc id. Massa sapien faucibus et molestie ac feugiat. Tellus
          integer feugiat scelerisque varius morbi enim. Lobortis feugiat
          vivamus at augue eget. Fringilla est ullamcorper eget nulla facilisi
          etiam. Pharetra convallis posuere morbi leo urna molestie. Elit ut
          aliquam purus sit amet. Velit aliquet sagittis id consectetur purus ut
          faucibus pulvinar elementum. Dolor sit amet consectetur adipiscing
          elit duis tristique sollicitudin. Eu non diam phasellus vestibulum.
          Adipiscing elit duis tristique sollicitudin nibh. Scelerisque viverra
          mauris in aliquam. Ullamcorper sit amet risus nullam eget. Elit ut
          aliquam purus sit amet. Ac feugiat sed lectus vestibulum mattis
          ullamcorper. Molestie ac feugiat sed lectus vestibulum mattis
          ullamcorper. Suscipit adipiscing bibendum est ultricies integer quis
          auctor elit. Tristique senectus et netus et malesuada fames ac turpis.
        </Typography>
      </Paper>
    </div>
  );
}

export default BenefitSummary;
