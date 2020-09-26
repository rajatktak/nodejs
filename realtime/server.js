const Hapi = require("hapi");
const Path = require("path");
const Inert = require("inert");
// Initialise Hapi.js server
const server = Hapi.server({
  port: process.env.port || 4000,
  host: "localhost",
  routes: {
    files: {
      relativeTo: Path.join(__dirname, "views"),
    },
  },
});

const Pusher = require("pusher");

// Initialize Pusher
const pusher = new Pusher({
  appId: "1076559",
  key: "58bdf5d1444c2dbc1ad7",
  secret: "b5cb1dff8e5790448165",
  cluster: "ap2",
  encrypted: true,
});

const init = async () => {
  // start server
  server.route({
    method: "POST",
    path: "/contact",
    handler(request, h) {
      const {
        contact
      } = JSON.parse(request.payload);
      const randomNumber = Math.floor(Math.random() * 100);

      // const randomGender = genders[Math.floor(Math.random() * genders.length)];
      Object.assign(contact, {
        id: `contact-${Date.now()}`,

      });
      pusher.trigger("contact", "contact-added", {
        contact
      });
      return contact;
    },
  });
  await server.register(Inert);

  // index route / homepage
  server.route({
    method: "GET",
    path: "/",
    handler: {
      file: "index.html",
    },
  });
  // delete contact
  server.route({
    method: "DELETE",
    path: "/contact/{id}",
    handler(request, h) {
      const {
        id
      } = request.params;
      pusher.trigger("contact", "contact-deleted", {
        id
      });
      return id;
    },
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

// handle all unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

// Start application
init();