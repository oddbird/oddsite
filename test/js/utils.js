import chaiJquery from 'chai-jquery';

chai.use(chaiJquery);

before(function() {
  this.respondTo = (url, status, json, headers) => {
    let matched = false;
    for (const req of this.requests) {
      if (req.readyState !== 4 && url === req.url) {
        matched = true;
        req.respond(
          status,
          headers || { 'Content-Type': 'application/json' },
          JSON.stringify(json),
        );
        break;
      }
    }
    expect(matched, `no requests matched by url ${url}`).to.be.true;
  };
  this.getRequest = (method, url) => {
    let request;
    for (const req of this.requests) {
      if (req.url === url && req.method === method) {
        request = req;
        break;
      }
    }
    expect(request, `no ${method} to ${url} found`).not.to.be.undefined;
    return request;
  };
});

beforeEach(function() {
  this.xhr = sinon.useFakeXMLHttpRequest();
  this.requests = [];
  this.xhr.onCreate = req => {
    this.requests.push(req);
  };
  this.clock = sinon.useFakeTimers();
});

afterEach(function() {
  this.xhr.restore();
  this.clock.restore();
});

chai.use(_chai => {
  const { Assertion } = _chai;

  Assertion.addMethod('calledOnceWith', function(...args) {
    const obj = this._obj;
    const assertion = new Assertion(obj);

    assertion.to.have.been.calledOnce;
    Reflect.apply(assertion.calledWith, assertion, args);
  });

  Assertion.addMethod('calledOnceWithExactly', function(...args) {
    const obj = this._obj;
    const assertion = new Assertion(obj);

    assertion.to.have.been.calledOnce;
    Reflect.apply(assertion.calledWithExactly, assertion, args);
  });

  Assertion.addMethod('containRequest', function(method, url) {
    const obj = this._obj;

    let found = false;
    for (const req of obj) {
      if (req.url === url && req.method === method) {
        found = true;
        break;
      }
    }
    this.assert(
      found,
      `no ${method} to ${url} found`,
      `expected ${method} to ${url} not to exist`,
    );
  });
});
