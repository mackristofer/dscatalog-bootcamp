package br.com.m3tech.dscatalog.services.exceptions;

public class DataBaseException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public DataBaseException(String msg) {
		super(msg);
	}

}
