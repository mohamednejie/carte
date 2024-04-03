const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const profilController=require('../controllers/profil.controller');
const logoutcontroller=require('../controllers/logout.controller')
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
  app.get("/api/getallporfil",profilController.getallprofils);
  app.delete("/api/deleteprofil/:id",profilController.deleteprofil);
  app.get("/api/getoneporfil/:id",profilController.getoneprofils);
  app.put("/api/updateprofil/:id",profilController.updateprofil);
  
}