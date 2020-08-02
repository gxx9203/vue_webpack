# demo3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### webpack dist 

from nginx 

add blow at  ngix.conf
server {
    listen 82;
    location / {
        root /xxxd/ist; #html访问路径  
        index index.html;
    }
}

restart nginx


