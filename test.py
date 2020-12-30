from flask import Flask, request
from pynput import mouse, keyboard
import pyperclip

mc = mouse.Controller()
kc = keyboard.Controller()

def type_key(key):
    kc.press(key)
    kc.release(key)

def paste():
    with kc.pressed(keyboard.Key.ctrl):
        kc.type('v')

keys = {
    'Space': keyboard.Key.space,
    'Enter': keyboard.Key.enter,
    'Alt': keyboard.Key.alt,
    'Shift': keyboard.Key.shift,
    'R. Shift': keyboard.Key.shift_r,
    'Tab': keyboard.Key.tab,

    'Alt Gr': keyboard.Key.alt,
    'Ctrl': keyboard.Key.ctrl,
    'R. Ctrl': keyboard.Key.ctrl_r,
    'Back': keyboard.Key.backspace,
    'Up': keyboard.Key.up,
    'Down': keyboard.Key.down,
    'Left': keyboard.Key.left,
    'Right': keyboard.Key.right,
}

def get_key(key):
    if key in keys:
        return keys[key]
    else:
        return key.lower()

app = Flask(__name__, static_url_path="", static_folder="reagent")

@app.route('/')
def index():
    return app.send_static_file("index.html")

@app.route('/post/swipe', methods=['POST'])
def swipe():
    args = request.get_json()
    dx = args['x']
    dy = args['y']
    mc.move(dx, dy)
    return "swipin {},{}".format(dx, 123)

@app.route('/post/click', methods=['POST'])
def click():
    mc.press(mouse.Button.left)
    mc.release(mouse.Button.left)
    return "hoho"

@app.route('/post/type', methods=['POST'])
def type():
    args = request.get_json()
    key = args['key']
    if key == 'R. Click':
        mc.press(mouse.Button.right)
        mc.release(mouse.Button.right)
    type_key(get_key(key))
    return "ok"

@app.route('/post/press', methods=['POST'])
def press():
    args = request.get_json()
    key = args['key']
    if key == 'Hold':
        mc.press(mouse.Button.left)
    else:
        kc.press(get_key(key))
    return "ok"

@app.route('/post/release', methods=['POST'])
def release():
    args = request.get_json()
    key = args['key']
    if key == 'Hold':
        mc.release(mouse.Button.left)
    else:
        kc.release(get_key(key))
    return "ok"

@app.route('/post/text', methods=['POST'])
def text():
    args = request.get_json()
    text = args['text']
    pyperclip.copy(text)
    paste()
    return "ok"
