//Ajax模拟分页操作
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}.json`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
//Ajax加载json
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
      console.log(object);
    }
  };
  request.send();
};
//Ajax加载xml
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if ((request.readyState === 4) & (request.status === 200)) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text);
    }
  };
  request.send();
};
//Ajax加载html
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // 创建 div 标签
      const div = document.createElement("div");
      // 填写 div 内容
      div.innerHTML = request.response;
      // 插入到身体中
      document.body.appendChild(div);
    }
  };
  request.onerror = () => {};
  request.send();
};
//Ajax加载js
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // 创建 script 标签
      const script = document.createElement("script");
      // 填写 script 内容
      script.innerHTML = request.response;
      // 插到身体里
      document.body.appendChild(script);
    }
  };
  request.send();
};
//Ajax加载css
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css"); //readyState = 1
  request.onreadystatechange = () => {
    console.log(request.readyState);
    // 下载完成，但不知道是成功 2xx还是失败4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // 创建 style 标签
        const style = document.createElement("style");
        // 填写 style 内容
        style.innerHTML = request.response;
        // 插到头里面
        document.head.appendChild(style);
      } else {
        alert("加载css失败");
      }
    }
  };
  request.send(); //readState = 2
};
