import React, { Component } from 'react';
import Tone from 'tone';

import '../styles/App.css';

class App_old extends Component {
    constructor() {
        super();

        this.amSynth = new Tone.AMSynth({
            harmonicity: 7,
            detune: 0,
            oscillator: {
                type: "sawtooth6"
            },
            envelope: {
                attack: 0.05,
                decay: 0.5,
                sustain: 10,
                release: 0.5
            },
            modulation: {
                type: "sine"
            },
            modulationEnvelope: {
                attack: 0.5,
                decay: 0,
                sustain: 1,
                release: 0.5
            }
        }).toMaster();
        this.duoSynth = new Tone.DuoSynth().toMaster();
        this.monoSynth = new Tone.MonoSynth({
            "oscillator": {
                "type": "square"
            },
            "envelope": {
                "attack": 0.1
            }
        }).toMaster();
        this.polySynth = new Tone.PluckSynth().toMaster();
        this.synth = new Tone.Synth().toMaster();

        this.playSynth = this.playSynth.bind(this);
        this.playSynth1 = this.playSynth1.bind(this);
        this.playSynth2 = this.playSynth2.bind(this);
        this.playSynth3 = this.playSynth3.bind(this);
        this.playSynth4 = this.playSynth4.bind(this);
        this.playSynth5 = this.playSynth5.bind(this);
        this.playSynth6 = this.playSynth6.bind(this);
        this.playSynth7 = this.playSynth7.bind(this);
        this.playSynth8 = this.playSynth8.bind(this);
        this.playSynth9 = this.playSynth9.bind(this);
    }

    playSynth() {
        //this.polySynth.triggerAttack("E4");
        //this.monoSynth.triggerAttackRelease("E4", "8n");
        //this.amSynth.triggerAttackRelease("E4", "8n");
        this.duoSynth.triggerAttackRelease("E4", "8n");
    }

    playSynth1() {
        //this.polySynth.triggerAttack("D4");
        //this.monoSynth.triggerAttackRelease("D4", "8n");
        //this.amSynth.triggerAttackRelease("D4", "8n");
        this.duoSynth.triggerAttackRelease("D4", "8n");
    }

    playSynth2() {
        //this.polySynth.triggerAttack("C4");
        //this.monoSynth.triggerAttackRelease("C4", "8n");
        //this.amSynth.triggerAttackRelease("C4", "8n");
        this.duoSynth.triggerAttackRelease("C4", "8n");
    }

    playSynth3() {
        //this.polySynth.triggerAttack("B3");
        //this.monoSynth.triggerAttackRelease("B4", "8n");
        //this.amSynth.triggerAttackRelease("B4", "8n");
        this.duoSynth.triggerAttackRelease("B4", "8n");
    }

    playSynth4() {
        //this.polySynth.triggerAttack("A3");
        //this.monoSynth.triggerAttackRelease("A3", "8n");
        //this.amSynth.triggerAttackRelease("A3", "8n");
        this.duoSynth.triggerAttackRelease("A3", "8n");
    }

    playSynth5() {
        //this.polySynth.triggerAttack("G3");
        //this.monoSynth.triggerAttackRelease("G3", "8n");
        //this.amSynth.triggerAttackRelease("G3", "8n");
        this.duoSynth.triggerAttackRelease("G3", "8n");
    }

    playSynth6() {
        //this.polySynth.triggerAttack("F3");
        //this.monoSynth.triggerAttackRelease("F3", "8n");
        //this.amSynth.triggerAttackRelease("F3", "8n");
        this.duoSynth.triggerAttackRelease("F3", "8n");
    }

    playSynth7() {
        //this.polySynth.triggerAttack("E3");
        //this.monoSynth.triggerAttackRelease("E3", "8n");
        //this.amSynth.triggerAttackRelease("E3", "8n");
        this.duoSynth.triggerAttackRelease("E3", "8n");
    }

    playSynth8() {
        //this.polySynth.triggerAttack("D3");
        //this.monoSynth.triggerAttackRelease("D3", "8n");
        //this.amSynth.triggerAttackRelease("D3", "8n");
        this.duoSynth.triggerAttackRelease("D3", "8n");
    }

    playSynth9() {
        //this.polySynth.triggerAttack("C3");
        //this.monoSynth.triggerAttackRelease("C3", "8n");
        //this.amSynth.triggerAttackRelease("C3", "8n");
        this.duoSynth.triggerAttackRelease("C3", "8n");
    }

    render() {
        return (
            <div className="App">
                <h1>Synth/Sampler</h1>
                <div className="grid-container">
                    <div className="grid-item" onClick={this.playSynth}>1</div>
                    <div className="grid-item" onClick={this.playSynth1}>2</div>
                    <div className="grid-item" onClick={this.playSynth2}>3</div>
                    <div className="grid-item" onClick={this.playSynth3}>4</div>
                    <div className="grid-item" onClick={this.playSynth4}>5</div>
                    <div className="grid-item" onClick={this.playSynth5}>6</div>
                    <div className="grid-item" onClick={this.playSynth6}>7</div>
                    <div className="grid-item" onClick={this.playSynth7}>8</div>
                    <div className="grid-item" onClick={this.playSynth8}>9</div>
                    <div className="grid-item" onClick={this.playSynth9}>1</div>
                </div>
            </div>
        );
    }
}

export default App_old;
